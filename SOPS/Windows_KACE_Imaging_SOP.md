# Image and Configure Windows Device (KACE – Non-Standard Devices)

---

## Quick Start (Use This First)

Use this SOP **only when MDT imaging is not possible** (non-Dell or unsupported devices).

- [ ] Confirm MDT cannot be used (driver issue)  
- [ ] Configure BIOS settings  
- [ ] Boot to Windows setup  
- [ ] Bypass network requirement (OOBE)  
- [ ] Create local Administrator account  
- [ ] Log in and install KACE agent  
- [ ] Run KACE check-in  
- [ ] Deploy Windows 11 image via KACE Task Chain  
- [ ] Validate device functionality  
- [ ] Validate applications and licensing  
- [ ] Confirm security check-ins  
- [ ] Update asset systems (KACE, Salesforce (E360))  

---

## Step-by-Step (Use if You Need More Detail)

### 1. Confirm KACE Imaging Requirement

Use this process when:

- Device is **non-Dell hardware**  
- MDT imaging fails due to:
  - Missing drivers  
  - Boot issues  
  - Unsupported model  

⚠️ Do NOT use KACE if MDT is supported  

---

### 2. Configure BIOS

Enter BIOS (F2) and configure:

- Disable **MAC Address Pass-Through**  
- Enable **UEFI Network Stack**  

Save and restart  

---

### 3. Boot to Windows Setup

- If new device:
  - Boot normally  

- If existing device:
  - Boot using Windows installation media (USB)  

Start Windows 11 setup  

---

### 4. Bypass Network Requirement (OOBE)

At **“Let’s connect you to a network”** screen:

Press:
CTRL + SHIFT + F10

Run:
oobe\bypassnro

Device will restart  

---

### 5. Continue Setup Without Internet

After restart:

- Select:
  - **I don’t have internet**  
  - Continue with **limited setup**  

---

### 6. Create Local Administrator Account

- Username: NetID  
- Password: NetID + date (e.g. abc12320260716)  

⚠️ Do NOT use Microsoft account  

---

### 7. Install KACE Agent

- Connect device to Ethernet  
- Download and install **KACE Agent**  

---

### 8. Run KACE Check-in

Navigate to:
C:\Program Files\Quest\Kace

Run:
runkbot 4 0

---

### 9. Confirm KACE Registration

Verify:

- Device appears in KACE  
- Device name is correct  

---

### 10. Deploy Windows Image via KACE

- Log into **KACE Admin Console**  
- Navigate to: Distribution → Task Chains  
- Select: **Deploy Windows 11 Image**  
- Run task on device  

---

### 11. Post-Imaging Validation

Confirm:

- Imaging completed successfully  
- Drivers functioning  
- Network works  

---

### 12. Validate Applications and Licensing

Confirm:

- Applications installed via KACE  
- Licensing active (Office, etc.)  
- Apps open without errors  

⚠️ Do NOT manually install apps unless KACE fails  

---

### 13. Security Check-ins

Confirm reporting to:

- KACE  
- Cortex XDR  
- InsightVM  

---

### 14. Final Asset Updates

Update:

- KACE (labels, user)  
- Salesforce (E360) (device + assignment)  

---

## Escalation

Escalate to **Endpoint Management** with:

- Device model  
- KACE status  
- Steps performed  

---

## Something Went Wrong (Quick Fixes)

| Issue | What to Check |
|------|---------------|
| Cannot bypass network | Re-run command |
| Device not in KACE | Re-run runkbot |
| Drivers missing | Install from manufacturer |
| Imaging fails | Re-run Task Chain |

---

## Done When

- Device is imaged via KACE  
- Drivers working  
- Apps installed and licensed  
- Security tools reporting  
- Asset systems updated  

---

## Notes

- KACE = fallback only  
- MDT is primary method  
- KACE handles OS, drivers, apps  
- You validate, not install  

---

## Roles & Responsibilities

**Service Desk**
- Execute KACE workflow  
- Validate system  
- Update assets  

**Endpoint Management**
- Support failures  
- Maintain KACE  

---

## Change Log

| Date | Change | Owner |
|------|--------|-------|
