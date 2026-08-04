# New Hire Device Setup SOP

---

## Quick Start (Use This First)

Follow this checklist when preparing a device for a new hire:

- [ ] Review incident/request (new hire setup)
- [ ] Confirm user details (Name, NetID, department)
- [ ] Confirm device type (Windows / Apple)
- [ ] Verify device availability or assign device
- [ ] Image device:
  - Windows → MDT SOP
  - Apple → Jamf SOP
- [ ] Configure user account and access
- [ ] Install required applications
- [ ] Validate device functionality
- [ ] Update asset systems (KACE, Salesforce (E360))
- [ ] Prepare device for handoff

If anything is unclear, stop and clarify before proceeding.

---

## Step-by-Step (Use if You Need More Detail)

### 1. Review Request

- Open incident/request
- Confirm:
  - Request is for a **new hire setup**
  - Start date
  - Department
  - Device type (if specified)

---

### 2. Validate User Information

Confirm:

- Full Name
- NetID
- Department
- Role (if relevant for access/software)

If missing:
- Contact manager / supervisor before proceeding

---

### 3. Confirm Device Assignment

Determine:

- New device required OR
- Existing device assigned

If no device assigned:
- Coordinate with inventory or Endpoint Management

---

### 4. Image Device

Follow appropriate SOP:

#### Windows Devices
- Use **Windows Imaging SOP (MDT)**

#### Apple Devices
- Use **Jamf Imaging SOP**

---

### 5. Configure User Access

Ensure:

- User account is active
- Required access is provisioned:
  - NYU Active Directory groups
  - Shared drives
  - Applications

If temporary access is required:
- Follow **Temporary Account Provisioning SOP**

---

### 6. Install Applications

Install required applications:

#### Standard
- Microsoft Office
- Zoom
- Browsers

#### Apple Devices
- Use **NYU Self Service App (Jamf)**

#### Department-specific software
- Install as needed

---

### 7. Security Check-ins

Confirm device is reporting to:

- KACE
- Cortex XDR
- InsightVM
- Jamf (Apple devices)

---

### 8. Device Validation

Confirm:

- User can log in
- Network connectivity works
- Applications open successfully
- No errors present

---

### 9. Update Asset Records

Update:

#### KACE
- Assign labels (department, user type)

#### Salesforce (E360)
- Create or update device record
- Assign device to user

---

### 10. Prepare for Handoff

Ensure:

- Device is fully configured
- Charger and accessories included
- Credentials are ready (if applicable)

Optional:
- Perform quick demo or login test

---

## Escalation

If issues cannot be resolved:

- Escalate to **Endpoint Management**
- Include:
  - Device type
  - User details
  - Imaging status
  - Errors encountered
  - Steps already performed

---

## Something Went Wrong (Quick Fixes)

| Issue | What to Check |
|------|---------------|
| Imaging failed | Refer to MDT/Jamf SOP |
| User cannot log in | Verify account status |
| Missing applications | Install or trigger policy |
| No network access | Follow Network SOP |
| Device not assigned | Check inventory |

---

## Done When

- Device is fully configured
- User can log in and access resources
- Applications are installed
- Security tools are reporting
- Asset systems are updated
- Device is ready for user

---

## Notes for Technicians

- Follow imaging SOPs for execution steps
- Always validate before handoff
- Ensure access matches user role
- Do not skip asset updates
- Escalate to Endpoint Management if unsure

---

## Roles & Responsibilities

### Service Desk
- Review request and validate user
- Image and configure device
- Install applications and validate setup
- Update asset systems
- Prepare device for handoff

### Endpoint Management
- Handle imaging failures
- Support advanced configuration issues
- Manage system-level problems

---

## Change Log

| Date | Change | Owner |
|------|--------|-------|
