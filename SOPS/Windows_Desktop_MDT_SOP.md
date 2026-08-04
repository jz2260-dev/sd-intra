# Image and Configure Windows Desktop (MDT)

------------------------------------------------------------------------

## Quick Start (Use This First)

Follow this checklist for most desktop setups:

-   [ ] Enter BIOS (F2) and configure settings\
-   [ ] Enable UEFI Network Stack\
-   [ ] Boot to MDT (F12 → Onboard NIC (IPv4))\
-   [ ] Deploy Windows 11 25H2 image (domain/OU setup)\
-   [ ] Log in as Administrator → run script → restart\
-   [ ] Confirm Windows and Office activation\
-   [ ] Add domain user to Local Administrators\
-   [ ] Install Windows updates\
-   [ ] Set browser homepage (sternlife.stern.nyu.edu)\
-   [ ] Run application and system updates (Zoom, browsers, etc.)\
-   [ ] Add device to DNS Manager\
-   [ ] Update device in KACE and asset systems\
-   [ ] Update/replace device record in Salesforce (if applicable)

If anything fails, go to the "Something Went Wrong" section below.

------------------------------------------------------------------------

## Step-by-Step (Use if You Need More Detail)

### 1. BIOS Setup

-   Restart and press F2\
-   Enable **UEFI Network Stack**\
-   Save and restart

------------------------------------------------------------------------

### 2. Start Imaging (MDT)

-   Press F12 during boot\

-   Select **Onboard NIC (IPv4)**\

-   Press Enter when prompted\

-   Log in with NYU credentials\

-   Select: **Deploy Staff PC -- Windows 11 25H2**

-   Enter computer name using format:\
    **SSB-\[Serial Tag\]**

-   Select the appropriate **department OU**:

    -   If unsure, select **OU-STAGING**

-   Select Adobe version (if needed)\

-   Click **Begin** (20--40 minutes)

------------------------------------------------------------------------

### 3. Administrator Setup

-   When prompted, press **CTRL + ALT + DELETE**\
-   Log in as **Administrator**:
    -   Retrieve password from PAM
-   Log back in as Administrator\
-   Click **YES** when prompted to run the script\
-   Restart

Then:

-   Set display resolution\
-   Verify:
    -   Windows is activated\
    -   Office is activated

#### Add User to Local Administrators

-   Navigate to:\
    This PC \> Manage \> Local Users & Groups \> Groups

-   Open **Administrators** group\

-   Click **Add** and add the user's **NetID**

------------------------------------------------------------------------

### 4. System Configuration

#### Browser Setup

-   Open Chrome, Edge, and Firefox\
-   Set homepage and startup page to:\
    sternlife.stern.nyu.edu\
-   Confirm browsers are up to date

#### Application & System Updates

-   Open Zoom and check for updates\
-   Run Windows Updates and restart as needed

#### System Check-ins

-   **KACE**:
    -   Navigate to:\
        C:`\Program `{=tex}Files`\Quest`{=tex}`\Kace  `{=tex}
    -   Run:\
        runkbot 4 0
-   **InsightVM**:
    -   Run Force Insight Check-In via KACE
-   **Cortex XDR**:
    -   Right-click system tray icon → check-in

#### Final User Configuration

-   Enable:
    -   User must change password at next login

Optional: - Remove unnecessary applications (e.g., Xbox, Skype)

------------------------------------------------------------------------

### 5. Network & Asset Updates

#### DNS Configuration

-   Retrieve device MAC address\
-   Add device to **DNS Manager**:
    -   Default VLAN: **VLAN 11**
    -   Adjust VLAN based on location if required

#### KACE

-   Apply labels:
    -   Department\
    -   User Type

#### Salesforce (E360)

-   Create or update device record

If replacing a desktop: - Update existing record

------------------------------------------------------------------------

## Something Went Wrong (Quick Fixes)

  Issue                What to Check
  -------------------- --------------------------------------
  No MDT boot          Check BIOS (UEFI Network Stack)
  No network           Check Ethernet connection
  Boot or disk error   Set disk mode to AHCI and retry
  Script didn't run    Run `C:\scripts\FirstLoginAdmin.bat`
  Activation failed    Escalate

------------------------------------------------------------------------

## Done When

-   Desktop boots normally\
-   User can log in\
-   System and applications are updated\
-   No errors present

------------------------------------------------------------------------

## Notes for Technicians

-   Follow Quick Start first\
-   Use Step-by-Step only if needed\
-   If unsure, escalate instead of guessing

------------------------------------------------------------------------

## Change Log

  Date   Change   Owner
  ------ -------- -------
