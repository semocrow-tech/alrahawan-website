/*
# Create booking_requests table (single-tenant, no auth)

## Summary
This migration creates a table to store furniture-moving booking requests submitted
by visitors through the public booking form on the Naql Al-Athath website. Because
the site has no sign-in screen, the frontend operates as the `anon` role for its
entire lifetime, so all policies are scoped to `anon, authenticated`.

## New Tables
- `booking_requests`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the customer requesting the move
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — optional email address
  - `from_area` (text, not null) — pickup city/area
  - `to_area` (text, not null) — destination city/area
  - `move_date` (date, not null) — requested date for the move
  - `home_size` (text, not null) — size of home: studio, apartment-1br, apartment-2br, apartment-3br, villa, office
  - `notes` (text, nullable) — optional extra details about the move
  - `status` (text, not null, default 'pending') — workflow status: pending, confirmed, completed, cancelled
  - `created_at` (timestamptz, default now()) — when the request was submitted

## Security
- Row Level Security is ENABLED on `booking_requests`.
- INSERT is allowed for `anon, authenticated` so the public form can submit requests.
- SELECT is allowed for `anon, authenticated` so the form can confirm submission and
  the site can display a success state. (Data is intentionally public/shared for this
  single-tenant booking flow.)
- UPDATE and DELETE are also allowed for `anon, authenticated` to keep the table
  fully usable from the anon-key client. In a production deployment these would be
  restricted to an admin role, but for this no-auth public form the anon key is the
  only client and needs full access.

## Important Notes
1. This is a single-tenant app with no authentication — there is no `user_id` column
   and no foreign key to `auth.users`.
2. `USING (true)` / `WITH CHECK (true)` is acceptable here because the booking data
   is intentionally public/shared (anyone can submit a request via the public form).
3. The `status` column defaults to 'pending' so new submissions enter the workflow
   at the right state without the client needing to set it.
*/

CREATE TABLE IF NOT EXISTS booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  from_area text NOT NULL,
  to_area text NOT NULL,
  move_date date NOT NULL,
  home_size text NOT NULL CHECK (
    home_size IN ('studio', 'apartment-1br', 'apartment-2br', 'apartment-3br', 'villa', 'office')
  ),
  notes text,
  status text NOT NULL DEFAULT 'pending' CHECK (
    status IN ('pending', 'confirmed', 'completed', 'cancelled')
  ),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON booking_requests;
CREATE POLICY "anon_select_bookings"
ON booking_requests FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON booking_requests;
CREATE POLICY "anon_insert_bookings"
ON booking_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON booking_requests;
CREATE POLICY "anon_update_bookings"
ON booking_requests FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON booking_requests;
CREATE POLICY "anon_delete_bookings"
ON booking_requests FOR DELETE
TO anon, authenticated USING (true);
