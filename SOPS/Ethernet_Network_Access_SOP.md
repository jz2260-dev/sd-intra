# Ethernet / Network Access SOP

---

## Quick Start (Use This First)

Follow this checklist when handling Ethernet/network access requests:

- [ ] Review incident/request
- [ ] Confirm device type (Windows / Apple) and location
- [ ] Obtain device MAC address
- [ ] Identify correct VLAN/network
- [ ] Add or update entry in DNS Manager
- [ ] Validate network connectivity
- [ ] Confirm desk phone is connected (sanity check)
- [ ] Update incident/request with actions taken

If anything is unclear, stop and escalate to Endpoint Management.

---

## Step-by-Step (Use if You Need More Detail)

### 1. Review Request

- Open incident/request
- Identify:
  - User (NetID)
  - Device type:
    - Windows
    - Apple (macOS)
  - Location (office, lab, etc.)
  - Issue type:
    - New connection
    - No network access
    - VLAN change

---

### 2. Confirm Device & Location

Verify:

- Device is physically connected via Ethernet
- Correct wall port / adapter is used
- User location is accurate

---

### 3. Obtain MAC Address

#### Windows

- Run:
  ipconfig /all

- Locate Ethernet adapter MAC address

---

#### Apple (macOS)

- Go to:
  System Settings → Network → Ethernet

- Or run:
  ifconfig

- Identify correct MAC address

---

### 4. Identify VLAN / Network

Determine correct network:

- Default:
  VLAN 11

- If different:
  - Confirm based on:
    - Location
    - Department
    - Use case

If unsure:
- Escalate to Endpoint Management

---

### 5. Update DNS Manager

In DNS Manager:

- Add or update entry using:
  - MAC address
  - Hostname (if known or assigned during imaging)
  - VLAN assignment

Ensure:
- Entry matches device and location

---

### 6. Validate Network Access

Confirm:

- Device receives IP address
- Internet access works
- Internal resources are reachable
- Device is assigned to correct VLAN (based on location)

---

### 7. Sanity Check (Important)

Confirm:

- User’s desk phone is connected and receiving network (link light / active)

This helps determine:

- Phone works, device doesn’t → Device / VLAN / MAC issue
- Phone does NOT work → Location / network jack issue

---

### 8. Troubleshooting

If network does not work:

Check:

- Correct MAC address used
- VLAN assignment is correct
- Ethernet cable / adapter is functional
- Device is not prioritizing Wi-Fi over Ethernet

---

### 9. Update Ticket

Document:

- Device type (Windows / Apple)
- MAC address used
- VLAN assigned
- DNS Manager update performed
- Validation results
- Jack/port number (if known)

Update status:

- Completed
- Awaiting User Confirmation

---

## Escalation

If issues cannot be resolved:

- Escalate to Endpoint Management
- Include:
  - MAC address
  - Device type
  - Location
  - VLAN used
  - Actions taken
  - Jack/port number (if available)

---

## Something Went Wrong (Quick Fixes)

| Issue | What to Check |
|------|---------------|
| No IP address | Verify MAC and VLAN |
| Wrong network | Confirm VLAN |
| No connectivity | Check cable/adapter |
| Device not found | Reconfirm MAC |
| Phone also not working | Possible location/network issue |

---

## Done When

- Device has network connectivity
- Correct VLAN is assigned
- User confirms access
- incident/request is documented

---

## Notes for Technicians

- Always verify MAC address before changes
- Default VLAN is 11 unless specified otherwise
- Never guess VLAN—confirm or escalate
- Use DNS Manager as the source of truth
- Use desk phone connectivity as a troubleshooting indicator
- Escalate to Endpoint Management if unsure

---

## Roles & Responsibilities

Service Desk:
- Gather MAC and user info
- Update DNS Manager
- Validate connectivity
- Document actions

Endpoint Management:
- Handle VLAN/network complexity
- Troubleshoot infrastructure issues
- Manage advanced configurations

---

## Change Log

| Date | Change | Owner |
|------|--------|-------|
