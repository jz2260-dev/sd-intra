# Image and Configure Apple Device (Jamf)

---

# Quick Start (Use This First)

Follow this checklist for most Apple device setups:

- [ ] Verify device serial is registered and scoped in Jamf
- [ ] Connect device to **Ethernet (required onsite)**
- [ ] Power on device and begin setup
- [ ] Confirm **Remote Management screen appears**
- [ ] Complete macOS setup assistant
- [ ] Confirm Jamf enrollment and configuration begins
- [ ] Wait for profiles and applications to install (do not use device)
- [ ] Restart device when prompted
- [ ] Log in and validate functionality
- [ ] Install applications via **NYU Self Service**
- [ ] Confirm security check-ins (Jamf, KACE, Cortex XDR, InsightVM)
- [ ] Update asset systems (KACE, Salesforce (E360))

---

# Step-by-Step (Use if You Need More Detail)

## 1. Verify Device in Jamf (Critical First Step)

Before powering on the device:

- Confirm serial number is:
  - Present in Jamf
  - Properly scoped for Prestage Enrollment

If not:

- Request:
  - **iBuy PO#**
- Have device registered before proceeding

⚠️ Do NOT power on device until this is confirmed

---

## 2. Network Requirement (Critical)

- Onsite:
  - Use **Ethernet only**
  - ❌ Do NOT use NYU Wi-Fi for enrollment

- Offsite:
  - Use reliable home Wi-Fi or Ethernet

---

## 3. Begin Setup

- Power on device
- Select:
  - Country → United States
  - Language settings → Continue
- Skip accessibility if not needed

---

## 4. Remote Management Screen (Key Checkpoint)

You should see:

👉 **Remote Management screen**

If NOT visible:

- Check:
  - Internet connection
  - Jamf scoping

If still missing:

- Escalate to Endpoint Management

---

## 5. Authenticate Enrollment

- Enter:
  - Stern credentials

Note:
- IT can use their own credentials if setting up for a user

---

## 6. Create User Account

- Enter:
  - Client’s Full Name
  - Username (NetID)
  - Password (NetID + creation date e.g., abc12320260716)

⚠️ Do NOT create account under technician’s name

---

## 7. Configuration Process

- Device will begin Jamf configuration

During this time:

- Device will:
  - Lock keyboard/mouse
  - Install applications and profiles

⏱️ Typical time:
- 15–30 minutes

⚠️ Do NOT use device during this process

---

## 8. Restart and Login

- Restart when prompted
- User logs in with:
  - SternID + password

---

## 9. Post-Enrollment Validation

Confirm:

- Device is in Jamf inventory
- Profiles applied correctly
- Core applications installed
- Network connectivity works

---

## 10. Install Applications (NYU Self Service)

- Open **NYU Self Service App** (Jamf)
- Install required applications not included by default:
  - Adobe Creative Cloud
  - Google Drive
  - NYU VPN
  - Any department-specific software

Ensure:
- Applications install successfully
- No errors during installation

---

## 11. Security Check-ins

Confirm device is reporting to:

- Jamf
- KACE (if applicable)
- Cortex XDR
- InsightVM

If needed:
- Trigger check-ins manually
- Allow time for systems to sync

---

## 12. Jamf Record Cleanup (IT Only)

If technician used their own credentials:

- Update Jamf record:
  - Assign correct user
  - Update department / location
  - Verify asset info

---

## Escalation

If issues cannot be resolved:

- Escalate to **Endpoint Management**
- Include:
  - Serial number
  - Enrollment status
  - Whether Remote Management appeared
  - Steps completed

---

# Something Went Wrong (Quick Fixes)

| Issue                       | What to Check              |
| --------------------------- | -------------------------- |
| No Remote Management screen | Jamf scoping / network     |
| Enrollment fails            | Use Ethernet / recheck ADE |
| Profiles not applying       | Wait / re-sync Jamf        |
| Device not in Jamf          | Registration issue         |
| Setup stuck                 | Restart and retry          |

---

# Done When

- Device is fully enrolled in Jamf
- Profiles and apps are installed
- User can log in and work normally
- Systems are updated (KACE, Salesforce (E360))

---

# Notes for Technicians

- Jamf enrollment depends on **pre-registered serials**
- Ethernet is required onsite for ADE
- Remote Management screen confirms proper enrollment
- Never use NYU Wi-Fi for initial setup
- Use NYU Self Service for application installs
- Verify security check-ins before closing
- Escalate early if scoping is incorrect

---

# Roles & Responsibilities

**Service Desk**

- Verify Jamf registration
- Perform enrollment
- Validate setup
- Install apps via Self Service
- Confirm security check-ins
- Update asset systems

**Endpoint Management**

- Handle Jamf scoping issues
- Manage policies and profiles
- Resolve enrollment failures

---

# Change Log

| Date | Change | Owner |
| ---- | ------ | ----- |
