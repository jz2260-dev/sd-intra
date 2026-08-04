# Temporary Account Provisioning SOP

---

## Quick Start (Use This First)

Follow this checklist when creating a temporary account:

- [ ] Review incident/request
- [ ] Confirm request is for a temporary account
- [ ] Verify required approvals
- [ ] Validate user information and account scope
- [ ] Create temporary Stern account
- [ ] Assign appropriate access/groups
- [ ] Communicate credentials securely
- [ ] Document account details in ticket

If anything is unclear, stop and clarify before proceeding.

---

## Step-by-Step (Use if You Need More Detail)

### 1. Review Request

- Open incident/request
- Confirm:
  - Request is for a **temporary account**
  - Business justification is provided

Common scenarios:

- Visiting scholars / researchers
- Contractors
- Student workers / teaching fellows

---

### 2. Verify Approval

- Confirm approval from:
  - Manager / Supervisor
  - Department

If approval is missing:

- Do not proceed
- Request approval in ticket

---

### 3. Validate User & Define Account Scope

Confirm the following before creating the account:

#### User Information

- Full name  
- NetID (if applicable)  
- Department  
- Reason for temporary account  

#### Account Duration

- Start date  
- End date (expiration)  

**Maximum Duration:**
- Temporary accounts may be created for **up to 1 year at the time of request**

**Extensions:**
- If access is required beyond 1 year:
  - A new incident/request and approval must be submitted  
  - Account expiration may be extended after review  

#### Access Requirements

- Systems required  
- Level of access needed  

⚠️ Principles:

- Grant **minimum required access only**  
- Temporary accounts must always have a **defined expiration**  
- Extensions must be **explicitly reviewed and approved** (not assumed)  
- Duration must **not exceed 1 year at the time of initial request**

If any information is missing:

- Contact requestor before proceeding

---

### 4. Create Temporary Account

In **NYU Active Directory**:

- Create account following naming convention (if applicable)

- Set:
  - Temporary password
  - Expiration date (if supported)

- Add user to required groups

---

### 5. Assign Access

Grant access to:

- Required AD groups
- Applications (if needed)
- Device access (if applicable)

Ensure:

- No excessive permissions are granted

---

### 6. Communicate Credentials (if needed)

- Provide credentials securely:
  - Avoid plain-text email if possible
  - Use approved communication method

- Instruct user:
  - Change password on first login (if applicable)
  - Account is temporary

---

### 7. Document in Ticket

Record:

- Account created
- Username
- Expiration date
- Access granted (groups/systems)
- Approval confirmation

---

### 8. Schedule Cleanup

Ensure:

- Account is:
  - Set to expire OR
  - Tracked for removal

If no automatic expiration:

- Add note or task for decommissioning

- Verify expiration date does not exceed 1 year from request date

---

## Escalation

If issues cannot be resolved:

- Escalate to **Endpoint Management**
- Include:
  - Request details
  - Required access
  - Actions already taken
  - Errors encountered

---

## Something Went Wrong (Quick Fixes)

| Issue | What to Check |
|------|---------------|
| No approval | Request approval before proceeding |
| Incorrect user info | Verify identity with requestor |
| Access not working | Check group membership |
| Account creation failure | Verify AD permissions |
| Over-permission risk | Review access scope |

---

## Done When

- Temporary account is created
- Required access is assigned
- Expiration is defined
- Ticket is fully documented
- User has been notified

---

## Notes for Technicians

- Temporary accounts should be **rare and justified**
- Always define an expiration
- Never grant full or unnecessary access
- Ensure proper documentation for audit purposes
- Escalate to Endpoint Management if unsure

---

## Roles & Responsibilities

**Service Desk**
- Validate request and approvals
- Create temporary account
- Assign standard access
- Document actions

**Endpoint Management**
- Handle complex access scenarios
- Manage advanced permissions
- Review security concerns

---

## Change Log

| Date | Change | Owner |
|------|--------|-------|
