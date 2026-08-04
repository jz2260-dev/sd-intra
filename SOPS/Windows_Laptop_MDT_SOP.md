# Image and Configure Windows Laptop (MDT)

------------------------------------------------------------------------

## Quick Start (Use This First)

Follow this checklist for most laptop setups:

-   [ ] Enter BIOS (F2) and configure settings
-   [ ] Disable MAC Address Pass-Through (if available)
-   [ ] Boot to MDT (F12 → USB NIC (IPv4))
-   [ ] Deploy Windows 11 25H2 image (Workgroup setup)
-   [ ] Log in as Administrator → run script → restart
-   [ ] Confirm Windows + Office activation
-   [ ] Create local user account
-   [ ] Add user to Local Administrators group
-   [ ] Install Windows updates
-   [ ] Log in as user → run script → restart
-   [ ] Set browser homepage (sternlife.stern.nyu.edu)
-   [ ] Run application and system updates (Zoom, browsers, etc.)
-   [ ] Require password change on next login
-   [ ] Update device in KACE and asset systems
-   [ ] Update/replace device record in Salesforce (if applicable)

If anything fails, go to the "Something Went Wrong" section below.

------------------------------------------------------------------------

## Step-by-Step (Use if You Need More Detail)

### 1. BIOS Setup

-   Restart and press F2
-   Enable **UEFI Network Stack**
-   Disable **MAC Address Pass-Through** (if available)
-   Save and restart

------------------------------------------------------------------------

### 2. Start Imaging (MDT)

-   Press F12 during boot
-   Select **USB NIC (IPv4)**
-   Press Enter when prompted
-   Log in with Stern credentials
-   Select: **Deploy Staff PC -- Windows 11 25H2**
-   Enter computer name
-   Select **Join Workgroup** and enter: `Workgroup`
-   Select Adobe version (if needed)
-   Click **Begin** (20--40 minutes)

------------------------------------------------------------------------

### 3. Administrator Setup

-   Log in as Administrator
-   Click YES when prompted to run script
-   Restart

Then:

-   Set display resolution
-   Verify:
    -   Windows is activated
    -   Office is activated

#### Create Local User

-   Go to: This PC \> Manage \> Local Users & Groups \> Users
-   Click **Action \> New User**
-   Enter:
    -   Username = NetID
    -   Password = NetID + ticket date (e.g., abc120240130)
-   Click Create

#### Add User to Local Administrators

-   Go to **Groups** under Local Users & Groups
-   Open **Administrators** group
-   Click **Add** and add the new user

------------------------------------------------------------------------

### 4. User Setup

-   Log in as user
-   Allow script to run → restart → log back in

#### Browser Setup

-   Open Chrome, Edge, and Firefox
-   Set homepage and startup page to: `sternlife.stern.nyu.edu`
-   Confirm browsers are up to date

#### Application & System Updates

-   Open Zoom and check for updates
-   Run Windows Updates and restart as needed

#### System Check-ins

-   **KACE**:
    -   Open Command Prompt
    -   Navigate to: `cd C:\Program Files\Quest\Kace`
    -   Run: `runkbot 4 0`
-   **InsightVM**:
    -   Run "Force Insight Check-In" script via KACE
-   **Cortex XDR**:
    -   Right-click system tray icon → check-in

#### Final User Configuration

-   Enable:
    -   User must change password at next login

Optional:

-   Remove unnecessary applications (e.g., Xbox, Skype)

------------------------------------------------------------------------

### 5. Final System Updates

#### KACE

-   Apply labels:
    -   Department
    -   User Type
-   Update asset record with department

#### Salesforce (E360)

-   Create or update device record

If replacing a laptop: - Update existing device record

------------------------------------------------------------------------

## Something Went Wrong (Quick Fixes)

  Issue                What to Check
  -------------------- ------------------------------------------
  No MDT boot          Check BIOS settings (UEFI Network Stack)
  No network           Reconnect USB NIC
  Boot or disk error   Change disk mode to AHCI and retry
  Script didn't run    Run `C:\scripts\FirstLogin.bat`
  Activation failed    Escalate

------------------------------------------------------------------------

## Done When

-   Laptop boots normally
-   User can log in
-   System and applications are updated
-   No errors present

------------------------------------------------------------------------

## Notes for Technicians

-   Follow Quick Start first
-   Use Step-by-Step only if needed
-   If unsure, escalate instead of guessing

------------------------------------------------------------------------

## Change Log

  Date   Change   Owner
  ------ -------- -------
