# Actionable Guide for online Anonymity

## Introduction

This is a summarized guide aimed at increasing privacy and anonymity on the internet.
It has been compiled based on the official [Hitchhiker’s Guide to Online Anonymity](https://anonymousplanet.org/guide/) not including the links in the guide.
Please note that this guide is **neither exhaustive nor guaranteed to be foolproof**.
Its purpose is to provide a quick overview and actionable steps, **not** to replace the in-depth explanations and context found in the original guide.
For comprehensive details, background information, and reasoning behind each recommendation, please refer to the full Hitchhiker’s Guide.
Keep in mind that none of these methods are foolproof, and each comes with potential trade-offs and risks.

## Your Network

### Your IP address

Your IP address is easily accessible and can reveal identifying information about you.
To protect your privacy, it's important to conceal or obfuscate your origin IP address — the one that can be linked directly to your identity.
This can be achieved using one or a combination of the following methods:

- **Public Wi-Fi networks** (free)
- **The Tor anonymity network** (free)
- **VPN services used anonymously** (e.g., paid with cash or Monero)

### Your DNS and IP Requests

By default, your DNS requests are handled by your Internet Service Provider (ISP), which logs them.

These requests are typically sent in plaintext, making them easy to intercept and monitor.

Recent studies have shown that **DNS over Tor** offers the most effective DNS privacy among available options.
However, even this method can potentially be compromised through other techniques.

To further enhance your privacy and anonymity, consider the following approaches:

- **Tor Hidden DNS Services** or
- **ODoH (Oblivious DNS over HTTPS53)** — This method helps prevent a single intermediary from correlating the DNS query with your IP address.
However, it is not effective against a **Global Passive Adversary (GPA)** who can monitor multiple parts of the communication chain simultaneously.
- **DoHoT (DNS over HTTPS over Tor)** — A newer method that routes encrypted DNS over the Tor network, offering enhanced anonymity.
This approach requires some Linux expertise.

Other DNS privacy practices include:

- Using a **private DNS resolver** (e.g., Pi-hole, NextDNS, or DNS over Tor)
- Enabling **DoH (DNS over HTTPS)** or **DoT (DNS over TLS)**
- Using browsers that support **ECH (Encrypted Client Hello)** — currently, only Firefox-based browsers support ECH, and it must be enabled manually
- Ensuring your browser supports **OCSP (Online Certificate Status Protocol)** — this is enabled by default in most modern Firefox and Chromium-based browsers

It's also important to note that simple IP requests (e.g., loading a webpage) can still leak information about the site you're visiting, as many websites use unique IP addresses.

To address these concerns as thoroughly as possible, this guide will later recommend two primary solutions:

1. **Using Tor**
2. **Implementing a virtualized, multi-layered setup**, such as **VPN over Tor** (e.g., DNS over VPN over Tor or DNS over Tor)

### Your RFID enabled devices

RFID in everyday items (cards, passport, phone, etc.) can be scanned without your knowledge, posing privacy risks like tracking or de-anonymization.

1. **Only carry RFID items when needed.**  
1. **Use RFID-blocking wallets or pouches.**  
1. **Be cautious in stores—some may scan all RFID tags.**  
1. **Shield devices during sensitive activities (e.g. Farrady cage).**

### The Wi-Fi and Bluetooth devices around you

Wi-Fi and Bluetooth signals are used to track your location and movements, even without GPS.
Devices constantly scan nearby signals and send this data to companies like Google and Apple.
This can be used for precise tracking—even through walls—by analyzing signal interference.

1. **Avoid carrying identifiable devices during sensitive activities.**  
1. **For high privacy, stay in areas shielded like a Faraday cage.**
1. You could also try turning of Wi-F, Bluetooth, GPS,... but you cannot really trust these settings

### Rogue Wi-Fi Access Points

Rogue Wi-Fi access points (APs) can trick your device into connecting to fake networks using de-auth attacks and spoofed portals.
Once connected, attackers can monitor your traffic, steal credentials, and even bypass VPNs/Tor with advanced techniques.

1. **Avoid connecting to unknown/public Wi-Fi networks.**  
1. **Always use a VPN/Tor (or VPN + Tor) on public networks.**  
1. **Verify captive portals carefully, don't enter credentials unless you're sure it's legit.**  

### Traffic Anonymization

Tor and VPNs help protect your privacy, **but they’re not invincible**.
Advanced attacks like **correlation** and **timing analysis** can de-anonymize you by matching encrypted traffic patterns to known destinations or users — even **without decrypting anything**.

**Common Attacks:**

- **Fingerprinting**: Match your encrypted Tor traffic to website patterns.
- **Timing Attacks**: Correlate when you connect to Tor/VPN with when someone accesses a site.
- **Counting Attacks**: Match download/upload sizes across networks.

**Mitigations:**

- Don’t access local services through anonymizers (e.g., don’t Tor into your own university network).
- Avoid heavily monitored networks (e.g., corporate or government).
- Use **VPN over Tor** (or **Tor over VPN**) to add layers and confuse correlation attempts.
- Use **public or residential Wi-Fi** for added unlinkability.

:::warning[Important Notes]

- Global surveillance adversaries (e.g., NSA) can still break anonymity with enough data.
- Tor usage **alone** might flag you as suspicious in some contexts.
- Tools like behavioral analysis or Wi-Fi/Bluetooth tracking can still deanonymize you indirectly.

:::

For more, check out:

- [Attacks on Tor GitHub](https://github.com/Attacks-on-Tor/Attacks-on-Tor)
- [Tor research survey](https://www.researchgate.net/publication/323627387_Shedding_Light_on_the_Dark_Corners_of_the_Internet_A_Survey_of_Tor_Research)
- [Tor 0day post](https://www.hackerfactor.com/blog/index.php?/archives/906-Tor-0day-The-Management-Vulnerability.html)

### Some Devices can be tracked even when offline

Modern devices like:

- iPhones (iOS 13+)
- Samsung phones (Android 10+)
- MacBooks (macOS 10.15+)

can still broadcast Bluetooth signals even when turned off.
Nearby online devices can pick this up, making offline tracking possible.

:::note[TL;DR]

Don’t bring these devices during sensitive activities.
"Off" doesn’t mean invisible.

:::

## Your Hardware Identifiers

### Your IMEI and IMSI

Every phone has two unique IDs:

- **IMEI** (device ID – tied to the hardware)
- **IMSI** (SIM ID – tied to your phone number and provider)

Whenever you connect to a mobile network, **both are logged** by operators and often shared with app makers, OS providers, and governments.

**Why it matters:**

- Even **anonymous SIMs** can betray you if reused on a phone with a known IMEI.
- **Antenna logs** can match your "burner" to your real phone based on signal strength and time.
- **IMEI sale records** can trace the phone back to you—even if bought with cash, e.g. CCTV, Antenna logs.
- **IMSI** is often tied to your ID (when SIMs require registration).
- **Apple/Google** can track historical usage of your IMEI/IMSI.
- **IMSI-catchers** (like Stingrays) can fake antennas to intercept calls, messages, or impersonate your number.

**Best practices:**

- Use **burner phones** and **cash-bought SIMs** not tied to your identity.
- Avoid reusing phones or SIMs.
- Consider **anonymous online SIM services** that accept crypto (like Monero).

:::warning

Some "privacy" phones (e.g., Purism Librem) **still don’t support IMEI randomization**, so full anonymity is tricky.

:::

:::note[TL;DR]

IMEI + IMSI = uniquely trackable.
Use a truly separate device + SIM for sensitive actions.

:::

### Your Wi-Fi or Ethernet MAC address

Every device with Wi-Fi or Ethernet has a **MAC address** — a unique ID for your network hardware.

**Why it's a privacy risk:**

- It can be **linked to the buyer** via manufacturer records (serial number + MAC).
- Even cash-bought laptops may be traceable through **CCTV and antenna logs**.
- OS vendors like **Apple, Google, Microsoft** log MACs for services like “Find My Device.”
- **Routers log MACs**, and many ISP-provided routers can be remotely accessed.
- **Public/commercial networks** may track nearby MAC addresses (e.g., for traffic analysis).

**Key point:** If you used a device normally before using it for sensitive activity, it's likely already linked to you.

**Protect yourself:**

- **Randomize your MAC address** — supported on Android, iOS, Linux, Windows 10/11.
- **macOS does not support MAC randomization** — not ideal for privacy.
- Avoid using your personal device for sensitive activities.

:::note[TL;DR]  

MAC addresses can silently link you to a device and place.
Use MAC randomization or separate hardware.

:::

### Your Bluetooth MAC Address

Your **Bluetooth MAC** is another unique identifier — like your Wi-Fi MAC, but for Bluetooth.

**Why it matters:**

- Manufacturers & OS vendors **log Bluetooth MACs**, potentially linking them to your identity or purchase.
- Logs + billing info + **CCTV footage** + **antenna data** can be used to trace it back to you.

**Privacy risks:**

- Can be used to **track your presence** in stores, public places, etc.
- Some **vulnerabilities** still exist, even with protections.

**What to do:**

- **Disable Bluetooth** entirely in BIOS/UEFI if possible — or via your OS if not.
- On **Windows 10**, toggle the Bluetooth device in *Device Manager* to force address randomization.

:::note[TL;DR]

Bluetooth tracking is less risky than Wi-Fi MAC tracking but still a concern.
Disable it if not needed.

:::

## Your CPU

Modern **Intel** and **AMD CPUs** include hidden subsystems:

- **Intel Management Engine (IME)**
- **AMD Platform Security Processor (PSP)**

These can **run even when your PC is "off"**, have **network access**, and have had **serious vulnerabilities** in the past.
Many consider IME a **backdoor**.

**Privacy Tips:**

- Prefer **AMD CPUs** — fewer issues and no known remote backdoors.
- **Disable IME/PSP** in BIOS (if possible).
- Consider using **Coreboot/Libreboot** (if supported).
- Use **virtual machines** for sensitive tasks.
- Only use on **anonymous public networks**.

**Check for vulnerabilities:**

- **Linux**: [`spectre-meltdown-checker`](https://github.com/speed47/spectre-meltdown-checker)  
- **Windows**: [InSpectre](https://www.grc.com/inspectre.htm)

## OS and App Telemetry services

Most modern OSes — **Windows, macOS, Android, iOS, Ubuntu, Apps** — **collect telemetry by default**, even if you opt out.
This data can include:

- Device identifiers  
- App usage  
- Location info  
- Network activity  
- Hardware/software details
- ...

This data **can identify and track you**, even if anonymized.

**What to Do:**

- Use **privacy-focused OSes** (e.g., Linux distros like Qubes).
- Block telemetry via firewalls, host files, or tools (e.g., **O&O ShutUp10++** for Windows).
- Minimize app installs; prefer **FOSS alternatives**.
- Avoid smartphones for sensitive activity.

## Your Smart Devices

Smartphones and smart devices constantly track:

- **Location, audio, habits, nearby devices**
- **Photos, accounts, networks**
- Data is often sent/stored **unencrypted**, even if you opt out.

Other culprits: smartwatches, speakers, fitness trackers, cars, tags.

**Leave all smart devices behind** for sensitive activities.

## Yourself

### Your Metadata

**Metadata** = info **about** your activity, not the content.  
Think: *who* you contacted, *when*, *where* — not *what* was said.

Example:  
You call an oncologist, then family — no one hears the call, but **the pattern speaks volumes**.

**Metadata often includes:**

- Your **location** (from phones, OS, apps, websites)  
- **Time and duration** of activity  
- **Devices** involved  
- Your **contacts** and their frequency  

This data is:

- Used in **geofencing warrants** (authorities request all devices at a place/time)  
- **Sold** to militaries and third parties  
- **Correlated** across ISPs, VPNs, platforms (even if each holds only part of the picture)

Even with a VPN:

- The **VPN sees your traffic**, but not your ID  
- The **ISP sees your ID**, but not your traffic  
  Together? They **could** trace you.

**Minimize metadata leakage.**  
Use privacy tools + stay aware of what your devices reveal — even *without* your input.

### Your Digital Footprint

Your **digital footprint** is more than just what you post or search — it's **how** you behave online.
And that behavior is *shockingly unique*.

**Behavior = Identity**
Even if you mask your IP, use a VPN, or disable cookies, systems can still identify you through:

- **Stylometry**: The way you write (word choice, grammar, punctuation, etc.)
- **Behavioral biometrics**: Typing speed, rhythm, mouse movements
- **Browser fingerprinting**: Fonts, extensions, screen size, OS, hardware
- **Keystroke logging**: Even if you don’t submit a form
- **Cursor tracking & click behavior**: Your subconscious habits are identifiers

Even things like:
> “You always click the same button first”  
> “You use specific words or typos often”  
...can be used to **link your identity** across platforms.

**How to Minimize Fingerprinting:**

Tech helps, but behavior matters most.

1. **Use privacy-focused tools**:
    - Tor Browser (with JS disabled if needed)
    - Firefox with privacy extensions (like uBlock Origin, NoScript, CanvasBlocker)
    - Anti-fingerprinting OSes (like Tails or Qubes OS)

2. **Act differently with anonymous identities**:
    - Change typing habits (speed, spelling style)
    - Use different phrasing or vocabulary
    - Vary mouse/click behavior
    - Don’t use your usual site/app flow or bookmarks

:::note

You’re playing a role. Don’t leave behavioral breadcrumbs.

:::

### IRL and OSINT

Even with good privacy tools, sharing real-life details over time can expose you.
This is where **OSINT (Open-Source Intelligence)** comes in—collecting public data like forum posts, photos, metadata, and social media to link identities.

**Example:**
Hacker Jeremy Hammond was caught after casually mentioning personal facts online.
Over time, those added up.

**OSINT Resources:**

- [OSINT Framework](https://osintframework.com)
- [Awesome OSINT GitHub](https://github.com/jivoi/awesome-osint)
- [ReconTool](https://recontool.org)

**Stay Safe:**

- Don’t reuse stories, habits, or writing styles
- Avoid specific dates, places, or job info
- Act like a completely different person online

You should never share real individual experiences/details using your anonymous identities that could later lead to finding your real identity.

:::note

Every post is a puzzle piece. Don’t let them add up.

:::

### Your Face, Voice, Biometrics and Pictures

Even if you're super careful, **your body can betray you**—especially your face.

**Face Recognition Is Everywhere:**

- Platforms like **Facebook, Google, Snapchat** use it to tag and organize photos.
- Even **random selfies in public** can capture your face and link you to a location and timestamp.
- Uploaded images often include metadata (EXIF), and even without it, AI can estimate **when and where** the photo was taken.

**Want to See This in Action?**

- Bellingcat’s guides & videos show how **facial recognition** and **geolocation** are used in real investigations:
  - [Facial Recognition in Investigations](https://www.youtube.com/watch?v=awY87q2Mr0E)
  - [Reverse Image Search Guide](https://www.bellingcat.com/resources/how-tos/2019/12/26/guide-to-using-reverse-image-search-for-investigations/)
  - [Sun & Shadow Geolocation](https://www.bellingcat.com/resources/2020/12/03/using-the-sun-and-the-shadows-for-geolocation/)

**Bottom Line:**

- **Avoid selfies** and **public appearances** if anonymity is critical.
- Don’t share photos or recordings tied to your voice, face, or body.
- Remember, once your image is online, it’s **almost impossible to take back**.

### Gait Recognition and Other Long-Range Biometrics

Even if your **face is covered**, you're still not safe from modern surveillance.

**Gait Recognition:**

- Cameras can ID you just by **how you move**—not just your steps, but how your **muscles shift**.
- **Changing your walk doesn't work**—they see through that.
- Best defense: **loose clothing** that hides muscle movements.

**Other Biometrics:**

- **Earlobes**, **skull shape**, **eye behavior**, **lip movements**, and even **emotion analysis** from posture/face.
- Facial coverings like balaclavas may **draw more attention** and still reveal enough to ID you.

**Mitigation Tips**
These only reduce risk—they don’t guarantee protection:

- **Mask** – can defeat some face recognition.
- **Baseball cap** – blocks top-down CCTV.
- **Sunglasses** – hide eyes (try [Reflectacles](https://www.reflectacles.com/)).
- Try 3D-printed **face/gait spoofers** like [FG-01](https://gitlab.com/FG-01/fg-01).

But remember: **trying too hard to hide** can make you more suspicious and lead to **human review**.

:::note[TL;DR]

Modern surveillance can identify you by **how you move, talk, look, and behave**.
Tools exist to reduce exposure, but none guarantee invisibility—only mitigation.

:::

### Phishing and Social Engineering

Phishing tricks you into revealing info by impersonating trusted sources—via fake emails, texts, or calls.
It’s often used to steal credentials or install malware.

**Defense:**

- **Stay skeptical** of unexpected messages.
- **Don’t click suspicious links** or download unknown files.
- **Verify** requests through official channels.
- Use **2FA** when possible.

## Malware, exploits, and viruses

### Malware in your files/documents/e-mails

Malware can hide in common files (PDFs, images, videos, Office docs) using tricks like steganography or exploits in outdated software.
Even tiny images in emails can leak your IP or trigger malicious downloads.

**Defense:**

- Avoid opening files from unknown sources.
- Keep your software up to date.
- Use **virtual machines** or **sandboxes** when handling risky files.

### Malware and Exploits in your apps and services

Even privacy tools like Tor or Brave can have hidden exploits unknown to the developers but known to attackers.

**How to Protect Yourself:**

- **Never fully trust any app.**
- **Always use the latest version** and verify downloads with checksums/signatures.
- **Use virtual machines** to isolate risky apps and browsers.

### Malicious USB Devices

Cheap, widely available devices like "BadUSBs" can be used to silently hack your system just by being plugged in.

They can:

- Deploy malware  
- Log your keystrokes  
- Track your location  
- Take control of your device  

These can be hidden in cables, mice, keyboards, or USB sticks.

**How to Protect Yourself:**

- **Never plug unknown USB devices** into sensitive machines.  
- **Use data-blocking adapters** for charging-only connections.  
- **Disable USB ports in BIOS** if you don’t need them.  
- **Avoid using public charging stations** without blockers.

Even skilled users can't detect advanced USB-based malware without forensic tools.

### Malware and backdoors in your Hardware Firmware and Operating System

Malware can exist not just in apps—but deep within your **hardware, firmware**, and **operating system**.

**Real-World Examples:**

- **Intel IME**: A manufacturer-embedded backdoor allowing remote access.  
- **Interdiction**: Attackers insert malware *before* hardware reaches you (e.g., in transit).  
- **Rootkits**: Stealthy malware that runs deeper than the regular operating system.  

**Mitigation (though limited):**

- Protect physical access to your hardware  
- Reflash firmware or BIOS from a trusted source if possible  
- Use devices that allow disabling manufacturer backdoors (e.g., Coreboot-supported hardware)

Once malware is in firmware or hardware, **detection and removal become extremely difficult** - especially if it’s by the manufacturer itself.

### Your files, documents, pictures, and videos

Most files—especially **images and videos**—contain hidden metadata that can reveal sensitive details.

**What kind of data?**

- **EXIF** in images: GPS location, camera model, time/date
- **Videos**: Can include GPS data, recording device info  
- **Documents**: Author name, edit history, software used

**Why it matters:**
Even if metadata doesn’t name you, it can show **where and when** you were somewhere—info that can be cross-referenced with other sources like CCTV or online posts.

**Mitigation:**

- **Strip metadata** before uploading (using tools like `exiftool`, `mat2`, or built-in settings)
- **Always** double-check all files—even plain text—for hidden data

:::warning

Be meticulous.
Leaked metadata has unmasked identities before - don’t let it happen to you.

:::

### Watermarking

**Pictures, Video and Audio:**

Even if there are **no visible watermarks**, files from commercial platforms may include **invisible watermarks** to track or identify you.

- Zoom can embed **video** and **audio watermarks**.
- Apps like Adobe Premiere can insert tracking via extensions.
- Watermarks often survive **compression** and **re-encoding**.
- Devices used to film (e.g., lenses or microphones) can be **fingerprinted**.

:::info

Avoid using known commercial tools or double-check their watermarking options if you're handling sensitive content.

:::

**Printer Watermarking:**

Yes, **your printer might betray you**, even offline.

- Many printers print **invisible dots** that identify the model and possibly the print time.
- This is called **printer steganography**

**Mitigation tips**:

- Print in **black and white only** (color often triggers watermarking).
- Use the EFF’s list of printers **without tracking dots**:  
  [EFF printer list](https://www.eff.org/pages/list-printers-which-do-or-do-not-display-tracking-dots)

Always assume your media might be watermarked unless you’ve verified otherwise.

### Pixelized or Blurred Information

Blurring or pixelating sensitive data **is not secure**. Adversaries can often **recover** the original information.

**Why blurring/pixelizing fails:**

- Tools like **Depix** [GitHub](https://github.com/beurtschipper/Depix) can **reverse blurred or pixelated text**, especially if a known font or structure is used.
- Deblurring/pixel recovery is common in **OSINT** (Open Source Intelligence).
- Even **photo enhancement** tools (like MyHeritage's [Photo Enhancer](https://www.myheritage.com/photo-enhancer)) can be enough to **reveal or infer details**.
- Videos aren't safe either — recovery techniques can also work on **video frames** [Video de-pixelation blog](https://positive.security/blog/video-depixelation)

**Best practice:**

> **Do not blur. Do not pixelate. Always use solid black redactions.**

That means: crop or overlay black boxes permanently.
Never rely on cosmetic effects to hide info — it's not enough.

## Your Crypto Transactions

**The Myth: “Crypto = Anonymous”:**

**Wrong.** Most cryptocurrencies like **Bitcoin** and **Ethereum** are **pseudonymous** — not anonymous.

Every transaction is:

- **Publicly visible** on a blockchain.
- **Permanently recorded**.
- **Linkable** via patterns, reused addresses, exchange logs, IP traces, etc.

**Where deanonymization happens:**

- **Creating a wallet** via Tor or VPN → stays anonymous.
- **Converting fiat** (EUR/USD) to crypto → not anonymous due to **KYC** laws at exchanges (Coinbase, Kraken, Binance, etc).
- **Cashing out crypto** to a bank → easily traced.
- **Using mixers/tumblers** → risky and often ineffective due to:
  - Centralized logs
  - Demixing possibilities
  - Legal gray areas (money laundering risks)

**Better Option: Monero (XMR):**

- **Privacy by design**:
  - Ring signatures
  - Stealth addresses
  - Confidential transactions
- Still not *perfect* - but the best available for privacy-conscious users.

## Your Cloud Backup and Sync Services

Many cloud services like iCloud, Google Drive, OneDrive, and Dropbox claim to use encryption, but they still hold the keys to your data, meaning they can access it if needed.
They also scan and index your files for analytics or legal reasons.

**What You Can Do:**

1. Encrypt your data before uploading.
2. Use zero-knowledge services like Tresorit or Proton Drive.
3. **Avoid cloud backups for sensitive data.**

## Microarchitectural Side-channel Deanonymization Attacks

A recently published attack can link your anonymous identity to a known alias, like a public Twitter handle, breaking anonymity - even with good OPSEC.

**How It Works:**

The attack uses invisible iframes and font fingerprinting to detect what fonts are installed on your system.
These patterns are unique enough to track users across sessions and link multiple identities together.
Even privacy features like “Do Not Track” won’t stop it.

**Mitigation:**

- **Use NoScript Browser Extension** (recommended): Blocks scripts and prevents these attacks.
- **Tor Browser** already blocks the attack by default (via NoScript 11.4.8+).
- Closing all activity tied to your public identity before using an anonymous one is essential.

:::warning

Using separate browsers or VMs alone does not prevent this attack.

:::

## Local Data Leaks and Forensics

Law enforcement can extract data from phones and laptops—even if encrypted. This can happen during investigations or random checks like border crossings.

**Smartphones:**

Tools like GrayKey and Cellebrite let police unlock and analyze devices.  
Read more:  

- [UpTurn: Mass Extraction](https://www.upturn.org/reports/2020/mass-extraction/)  
- [NYT: Police Can Break Into Your Phone](https://www.nytimes.com/2020/10/21/technology/iphone-encryption-police.html)  
- [Vice: iPhones Can Be Unlocked](https://www.vice.com/en/article/vbxxxd/unlock-iphone-ios11-graykey-grayshift-police)

**Forensic Tools:**

- [EnCase Guide (PDF)](http://encase-docs.opentext.com/documentation/encase/forensic/8.07/Content/Resources/External%20Files/EnCase%20Forensic%20v8.07%20User%20Guide.pdf)  
- [FTK Toolkit](https://accessdata.com/products-services/forensic-toolkit-ftk)  
- [SANS DFIR Videos](https://www.youtube.com/c/SANSDigitalForensics/videos)

**OS Security:**

- [Johns Hopkins: Mobile Security Overview](https://securephones.io/main.html)

**Laptops:**
Use full disk encryption, virtualization, and compartmentalization to reduce risk.

## Bad Cryptography

"Don’t roll your own crypto" is a common warning for good reason—crypto is hard to get right. Strong cryptography takes years of research, is open source, peer-reviewed, and tested in the real world.

**Avoid apps or services that:**

- Use custom or closed-source crypto
- Modify existing algorithms
- Use terms like “military-grade encryption” without transparency

**Use:**

- **Hashes**: SHA-3, BLAKE2 (ok: SHA-256/512; avoid: SHA-1, MD5)
- **Disk encryption**: AES-256 with HMAC-SHA-2/3, ChaCha20, Serpent, TwoFish
- **Password storage**: Argon2 (i/id), scrypt (ok: bcrypt; last resort: PBKDF2; avoid: SHA, MD5)
- **HTTPS**: TLS 1.3 (or TLS 1.2)
- **Signing**: ed25519/ECDSA + ECDH (ok: RSA 4096; avoid: RSA 2048)
- **SSH**: ED25519 or RSA 4096

## No-Log Policies

Many VPN and email providers claim to have "no-log" policies, but they’re still legal entities and can be compelled to start logging by court orders—often without your knowledge.

**Key takeaways:**

- Providers can be forced to log data, regardless of their policies.
- You won’t be notified if you're being monitored.
- Warrant canaries exist but remain unproven in court.

**Mitigation:**

- Use VPNs that accept **cash or Monero**.
- Always **use VPNs over Tor** to hide your identity from the provider.
- Don’t rely solely on provider claims—assume they can be compromised.

:::tip

Trust no one.
Design your privacy stack under the assumption that "no-log" might just mean "not yet logging."

:::

## Some Advanced targeted techniques

**Read the resources linked on the official guide!**

Even if you have great digital hygiene, **high-skilled adversaries** can still breach your defenses—especially if they know where your devices are. These attacks often involve **physical access, hidden malware, or exploiting side channels** (like sound, light, vibrations).

**Examples of Advanced Attacks:**

**With Malware:**

- **Router Infection:** Send data out via a compromised router.
- **Light/Camera Attacks:** Watch light variations from keyboards or displays to extract data.
- **Sound-Based Attacks:** Use fan noise, HDD noise, or ultrasonic sounds to transmit information.
- **Electromagnetic Attacks:** Leak data via screen emissions, HDD vibrations, or power lines.
- **Acoustic/IR Attacks:** Use hacked cameras to communicate with malware via infrared light.
- **RAM Wi-Fi Hack:** Turn RAM into a covert Wi-Fi transmitter (!).

**Without Malware:**

- **Wall Imaging:** Use tiny wall vibrations to map people’s positions.
- **Snack Bag Reflections:** Use reflections on shiny surfaces to reconstruct a room.
- **Floor Vibrations:** Track people and emotions through footsteps.
- **Light Bulb Spying:** "Hear" conversations by observing vibrating light bulbs.

**Realistic Threat Level:**

Most individuals aren't targeted like this.  
**However**, **nation-states**, **corporate espionage**, or **high-value targets** can be.

**Mitigations:**

- Use devices only on **trusted power sources**.
- Keep devices away from **cameras** and **microphones**.
- Use **soundproofed rooms** and **Faraday cages**.
- Avoid talking near **visible light bulbs** or **reflective surfaces**.
- **Buy hardware offline** from random stores.
- **Limit physical access** to your machines.

## Some bonus resources

**Read the resources linked on the official guide!**

**Bonus Resources for Deeper Learning:**

- [Whonix Data Collection Techniques](https://www.whonix.org/wiki/Data_Collection_Techniques)
- [ToS;DR: Terms of Service, Didn’t Read](https://tosdr.org/)
- [EFF Privacy Advocacy](https://www.eff.org/issues/privacy)
- [List of Surveillance Projects (Wikipedia)](https://en.wikipedia.org/wiki/List_of_government_mass_surveillance_projects)
- [Gwern’s Death Note Anonymity Essay](https://www.gwern.net/Death-Note-Anonymity)
- [Michael Bazzell's OSINT Techniques Book](https://inteltechniques.com/book1.html)
- [Freehaven Anonymity Bibliography](https://www.freehaven.net/anonbib/date.html)

**Transparency Reports (How often companies hand over user data):**

- [Google](https://transparencyreport.google.com/user-data/overview)
- [Facebook](https://transparency.facebook.com/)
- [Apple](https://www.apple.com/legal/transparency/)
- [Cloudflare](https://www.cloudflare.com/transparency/)
- [Discord](https://discord.com/blog/discord-transparency-report-q1-2022)
- [GitHub](https://github.blog/2021-02-25-2020-transparency-report/)
- ... and many more.

:::danger[Bottom line]

If your adversary is skilled enough and determined enough, no setup is 100% safe.  
**Stay paranoid, stay careful, but don’t go crazy unless you have to.**

:::

## General Preparations

Personally, in the context of this guide, it is also interesting to have a look at your security model.
And in this context,we only have one to recommend:

Zero-Trust Security ("Never trust, always verify").

Here are some various resources about what Zero-Trust Security is:

- [DEFCON, Zero Trust a Vision for Securing Cloud](https://www.youtube.com/watch?v=euSsqXO53GY)
- [From the NSA themselves, Embracing a Zero Trust Security Model](https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZT_SECURITY_MODEL_UOO115131-21.PDF)

### Picking your route

This guide will only go down the [Qubes OS route](https://anonymousplanet.org/guide/##the-qubes-route) as this is probably the most secure.
If you need something immediately have a look at the [Tails route](https://anonymousplanet.org/guide/##the-tails-route).

Note that the Qubes route will afford several investments such as a dedicated laptop.

## Steps for all routes

### Getting used to using better passwords

**Passphrases > Passwords:**

Passphrases (like `purple-fish-drum-sky`) are more secure and easier to remember than complex passwords (`Tr0ub4dor&3`).

**Tips for Strong Passphrases:**

- Use **4+ random words** (more = better).
- Avoid **quotes**, **personal info**, and **common words** only.
- Make it **easy to remember and type**.
- **Don’t reuse** across accounts.

Use [KeePassXC](https://keepassxc.org/) to store long, unique passwords for every service locally.

Try [useapassphrase.com](https://www.useapassphrase.com/) for examples and entropy.

### Getting an Anonymous Phone Number

Skip this if you don't need to register anonymously on platforms that require phone numbers.

**Burner Phone:**

- **Buy a basic phone** (ideally a dumbphone with removable battery) **with cash** at a flea market/shop **without CCTV**.
- **Leave your real phone on at home** to avoid metadata leaks.
  - If possible, leave your phone doing something (for example, watching YouTube on auto-play) to obscure the metadata trail further.
- **Never turn the burner on at home or near your real phone**.
- Disable Bluetooth, never connect to Wi-Fi, and test the phone elsewhere.
- Power the phone off, remove the battery (if possible) and put it in a farrady bag when not in use.

**Anonymous Prepaid SIM:**

- Harder to get due to ID laws (check [SIM registration wiki](https://prepaid-data-sim-card.fandom.com/wiki/Registration_Policies_Per_Country)).
- **Buy with cash** and **no ID**, avoid cameras.
- Recommended: **GiffGaff (UK)** — no ID, lets you change number twice.
- **Power off the burner** after activation/top-up and before returning home.

**Online Phone Numbers (Riskier):**

- Only use after securing your anonymous setup.
- Best paid options (accept Monero, no ID):
  - [crypton.sh](https://crypton.sh)
  - [virtualsim.net](https://virtualsim.net)
- Riskier/free options (use at your own risk):
  - [https://oksms.org](https://oksms.org)
  - [https://sms24.me](https://sms24.me)
- It is more convenient, cheaper, and less risky to just get a pre-paid SIM card from one of the physical places that still sell them for cash without ID.

:::warning

Avoid shady marketplaces and never use your real identity.

:::

### Get a USB key

**Skip this step if you have no intention of creating anonymous accounts on most mainstream platforms, but you will want anonymous browsing; or if the platforms which you will use allow registration without a phone number.**

Get at least one or two decent size generic USB keys (at least 16GB but we would recommend 32GB).
Please do not buy or use gimmicky self-encrypting devices.
Some might be very efficient but many are gimmicky gadgets that offer no real protection

### Find some safe places with decent public Wi-Fi

You’ll need **3-5 different public places** with **free Wi-Fi** (no ID/signup) where you can go unnoticed.

**Avoid Places Like:**

- **Starbucks** (CCTV, pay-for-Wi-Fi with traceable payments)
- **Tourist hotspots** (high chance of appearing in photos/videos with location data)

**Look For:**

- Cafes or libraries **without cameras**
- Parks or public squares with **open Wi-Fi**
- Hotels with guest Wi-Fi (accessed discreetly)
- Any spot where you can stay for a while **without standing out**

:::tip[Tips]

- **Stay aware** of people filming (TikToks, selfies, etc.)
- Don’t use the same spot repeatedly—**rotate locations**
- If possible, **connect from a safe distance** using a long-range Wi-Fi antenna

:::

## Steps for all routes except Tor and Tails

### Get a dedicated laptop

For best anonymity, use a **separate laptop** that can’t be easily linked to you.

**Ideal Laptop:**

- **Bought with cash** (use same precautions as for burner phone/SIM)
- **Secondhand** (no ties to your identity — especially for MacBooks)
- **Freshly installed OS** (Windows, Linux, or macOS)
  - No prior use for personal tasks
  - For Windows: don’t activate, reinstall without product key

**Why?**

- Avoid leaks from **hardware IDs** (MAC address, Bluetooth, product keys)
- Prevent tracking if **disposed** later
- Avoid OS telemetry linking it back to you

**Specs to Aim For:**

- **250GB+ storage** (ideally 1TB+)
- **6GB+ RAM** (8–16GB ideal for virtual machines)
- Battery lasting **a few hours**
- HDD or SSD — both workable

### Some laptop recommendations

Go for a **business-grade** laptop (not consumer/gaming models).  
Example: **Lenovo ThinkPad** (highly recommended).

**Why Business Laptops?**

- **Better security features** (especially in BIOS/UEFI)
- **Longer support** and updates
- **More control** over hardware and security settings

**Look For:**

- Custom **Secure Boot** settings
- BIOS-level **HDD/SSD passwords**
- Ability to **disable** Intel ME / AMD PSP  
  - AMD is slightly safer (audited PSP)  
  - But **Intel** is better if you plan to run **Qubes OS** as it does not support AMD with their anti-evil-maid system
- Built-in **secure wipe** tools (great for SSDs)
- Toggle for **USB, Wi-Fi, Bluetooth, Camera, Mic**
- Stronger **virtualization** security
- **Anti-tamper** features
- Models supported by **Libreboot** (optional for advanced users)

### Bios/UEFI/Firmware Settings of your laptop

Access your BIOS/UEFI by pressing a key like **F1, F2, Del** at boot (check your brand).  
[Guide from HP (Archive)](https://store.hp.com/us/en/tech-takes/how-to-enter-bios-setup-windows-pcs)

**Disable:**

- **Bluetooth**
- **Biometrics** (fingerprint scanners)  
  *(optional: use only pre-boot, not for BIOS or OS login)*
- **Webcam & Microphone**
- **USB/HDMI/Ports** (Ethernet, SD, Firewire) — *disable if possible*
- **Intel ME** (*usually not possible*)
- **AMD PSP** (*sometimes possible on AMD laptops*)

**Enable & Set Up:**

- **BIOS/UEFI Password**  
  Use a long passphrase and require it for:  
  - Accessing BIOS/UEFI  
  - Changing boot order  
  - Startup/power-on  
- **HDD/SSD Password**  
  Adds protection even if disk is removed
- **Prevent Boot Options Access** without BIOS password
- **Secure Wipe Tool** (check if available)

**Secure Boot (Optional Based on OS):**

- **Keep ON** for Windows/Linux  
- **Turn OFF** if using **Qubes OS**
- Use **custom mode** if possible to remove default keys and only allow your signed OS bootloader

**About Secure Boot:**

- Protects from **unauthorized bootloaders** (e.g., with malware)
- Does *not* encrypt your disk (use **Full Disk Encryption** for that)
- Not foolproof — can be bypassed on old/compromised systems
- Recommended to **keep it ON** for extra layer of security (except with Qubes OS)

### Physically Tamper protect your laptop

At some point, your laptop will be left unattended. To make tampering harder and detectable, consider these simple methods:

**Why It Matters:**

- Attackers can easily install hardware keyloggers or clone your hard drive (even if encrypted).

**Nail Polish + Glitter (Visible Seal):**  

- Apply over screws and seams. Any tampering breaks the pattern.  
- Guide: [Mullvad’s method (archive)](https://mullvad.net/en/help/how-tamper-protect-laptop/).  
- Downside: noticeable, may attract attention.

**Subtle Methods:**

- Take close-up photos of screw heads. Later compare for tool marks or changes.
- Put a tiny drop of candle wax inside screw heads or USB ports. Tampering will disturb the wax.

**Best Practices:**

- Regularly inspect your laptop if in risky environments.
- Combine this with BIOS passwords and full disk encryption for stronger protection.

## The Qubes Route

Qubes OS is a security-focused, open-source operating system built on Xen virtualization. Instead of running apps directly, each app or group of apps runs in its own isolated virtual machine ("Qube"), providing strong compartmentalization. It also integrates Whonix for privacy and anonymity by default.

**Learn More:**

- [Qubes OS Intro](https://www.qubes-os.org/intro/)
- [Getting Started Guide](https://www.qubes-os.org/doc/getting-started/)
- [Hardware Compatibility List](https://www.qubes-os.org/hcl/)

Recommended videos:

- *Life Behind the Tinfoil* — Konstantin Ryabitsev  
- *6 Months with Qubes OS* — Matty McFatty  
- *Qubes OS: How it works*  

**Pros:**

- Strong isolation and security
- Recommended by experts (e.g., Edward Snowden, PrivacyGuides)

**Cons:**

- High hardware requirements:  
  - 16GB RAM recommended (24-32GB ideal)  
  - Less than 8GB is not practical  
- Hardware compatibility can be tricky (check the [HCL](https://www.qubes-os.org/hcl/))  
- No built-in OS-wide plausible deniability

If you’re comfortable with Linux and have compatible hardware, Qubes OS offers one of the best security models available.

### Pick your connectivity method

**If maximum anonymity is your top priority:**  

**Use Tor Alone** (User -> Tor -> Internet)  

\+ Best for staying anonymous  
\+ Keeps Tor’s stream isolation (separate circuits per app/session)  
\- Some websites will block Tor exit nodes  
\- You’ll face a lot of captchas and account signup blocks  
\- Can raise suspicion in some places just for using Tor

**If you need anonymity *and* need to access services that block Tor**

**Use VPN/Proxy over Tor** (User -> Tor -> VPN -> Internet)  

\+ Circumvents bans on Tor exit nodes  
\+ Keeps your entry IP anonymous (VPN only sees Tor exit node)  
\- Breaks Tor’s stream isolation (all apps use the same Tor circuit through the VPN)  
\- Slightly weaker anonymity due to potential correlation attacks  
\+ Good balance if you're careful with your identities and want to access mainstream sites

**Best version**: Use your own self-hosted VPS paid with Monero or cash, running your own VPN/proxy.  

\+ Dedicated IP avoids blocks, captchas  
\+ No other users sharing your VPN IP, meaning fewer obstacles  
\+ Still routes through Tor exit nodes for anonymity  

**If you're in a place where Tor is blocked but VPN is tolerated**  

**Use Tor over VPN** (User -> VPN -> Tor -> Internet)  

\+ Hides Tor use from your ISP (they only see VPN traffic)  
\+ Maintains Tor’s stream isolation  
\- VPN provider knows your IP (so choose anonymous payment + no logs)  
\- You’re still subject to Tor exit node bans on services  

**Options to avoid**  

- VPN Alone (User -> VPN -> Internet)  
- VPN over VPN (User -> VPN -> VPN -> Internet)  
- No VPN or Tor (just raw internet)  
These don’t provide meaningful anonymity and are traceable over time.

**My plain recommendation logic**  

- **For pure anonymous browsing without accounts** -> **Tor Alone**  
- **For creating accounts on services that block Tor** -> **VPN/Proxy over Tor** (ideally with your own VPS)  
- **If Tor is blocked/censored where you are** -> **Tor over VPN**  

**Important Trade-off to Remember:**

- **Tor Alone** = Maximum anonymity, but often impractical (blocked, captchas)  
- **VPN/Proxy over Tor** = More practical for everyday use (account creation, less blocking), but sacrifices some anonymity due to breaking stream isolation.

### Getting an anonymous VPN/Proxy

**Skip this step if you want to use Tor only or VPN is not an option.**

See [Appendix O: Getting an anonymous VPN/Proxy]

### Note about Plausible Deniability

Qubes OS uses LUKS for full disk encryption and it is technically possible to achieve a form of deniability by using detached LUKS headers.
This is not yet integrated into this guide but you will find an evolving tutorial on how to achieve this here:
[https://forum.qubes-os.org/t/qubes-os-installation-detached-encrypted-boot-and-header/6205](https://forum.qubes-os.org/t/qubes-os-installation-detached-encrypted-boot-and-header/6205) and some more background information within the Linux Host OS section (see [Note about plausible deniability on Linux]).

### Installation

You will follow the instructions from the official Qubes OS guide:
[https://www.qubes-os.org/doc/installation-guide/](https://www.qubes-os.org/doc/installation-guide/)

:::warning

Secure Boot is not supported (see FAQ: [https://www.qubes-os.org/faq/#is-secure-boot-supported](https://www.qubes-os.org/faq/#is-secure-boot-supported)).
You must disable Secure Boot in your BIOS/UEFI settings before installing.

:::

#### Steps

1. **Download the latest Qubes OS 4.1.x ISO**  
  Make sure your hardware is listed as compatible on the Qubes Hardware Compatibility List (HCL).
2. **Get and verify the Qubes OS Master Signing Key**  
  Download it from: [https://keys.qubes-os.org/keys/qubes-master-signing-key.asc](https://keys.qubes-os.org/keys/qubes-master-signing-key.asc)
3. **Prepare a USB key with the Qubes OS ISO file**  
  Use tools like `dd`, Rufus, or Etcher to write the ISO to the USB stick.
4. **Install Qubes OS**  
   Follow the step-by-step guide linked above. During installation:
   - If you plan to use **Tor or VPN over Tor**, check the option:
     **"Enabling system and template updates over the Tor anonymity network using Whonix"**
     This will route all Qubes OS updates through Tor. It slows down updates but increases your anonymity from the start.
     (If you face issues connecting to Tor because of censorship, use Tor Bridges: [https://www.whonix.org/wiki/Bridges](https://www.whonix.org/wiki/Bridges)
   - If you plan to use **Tor over VPN** or cannot use Tor, leave this option unchecked.
5. **Verify the ISO signature**  
   Before installation, you *must* verify the ISO signature to ensure it hasn't been tampered with.
   Follow the official verification guide here: [https://www.qubes-os.org/security/verifying-signatures/](https://www.qubes-os.org/security/verifying-signatures/)

   - Get the Qubes master signing key fingerprint from multiple independent sources.
   - The fingerprint should be:
     **427F 11FD 0FAA 4B08 0123 F01C DDFA 1A3E 3687 9494**
     Do not skip this step, even if downloading from the official site.

:::info

If you cannot use Tor at all, there is no point in installing Whonix VM templates.
In that case, disable Whonix installation during the initial setup wizard after Qubes installation.

:::

### Lid Closure Behavior

Unfortunately, Qubes OS does not support hibernation365 which is an issue regarding cold-boot attacks.
To mitigate those, I highly recommend that you configure Qubes OS to shut down on any power action (power button, lid closure).
You can do set this from the XFCE Power Manager. Do not use the sleep features.

### Anti Evil Maid (AEM)

:::warning

If you don’t meet these requirements, skip this step.

:::

- Intel CPU
- Legacy BIOS (not UEFI)
- TPM 1.2

**What it does:**

AEM protects against **Evil Maid attacks** (physical tampering while you're away) using TPM-based boot verification. It needs a USB drive connected directly to **dom0**, which carries some risk.

**Important:**

- Best protection: always keep physical control of your device.
- AEM is only useful if that's not possible and matches your threat model.

**More info & install:**

- [Qubes AEM guide](https://www.qubes-os.org/doc/anti-evil-maid/)
- [Original blog post](https://blog.invisiblethings.org/2011/09/07/anti-evil-maid.html)
- [GitHub repo](https://github.com/QubesOS/qubes-antievilmaid)

### Connect to Public Wi-Fi

Do this **only from a safe place** (see [Anonymizing your MAC address](https://forum.qubes-os.org/t/anonymizing-your-mac-address/19072)).

**Steps:**

1. Left-click the network icon, note the **Wi-Fi SSID**.
2. Right-click -> **Edit Connections** -> `+` -> **Wi-Fi**.
3. Enter the SSID.
4. Set **Cloned MAC Address** to **Random** (note: can be unreliable on some adapters).
5. Save and connect to the Wi-Fi.

**If Wi-Fi needs registration:**

- Start a **Disposable Fedora Firefox** (`Menu --> Disposable --> Fedora --> Firefox`).
- Open Firefox and register (anonymously).

### Updating Qubes OS

After you are connected to a Wi-Fi you need to update Qubes OS and Whonix.
You must keep Qubes OS always updated before conducting any sensitive activities.
Especially your Browser VMs. Normally, Qubes OS will warn you about updates in the upper right corner with a gear icon.
As this might take a while in this case due to using Tor, you can force the process by doing the following:

- Click the upper left Applications icon
- Select Qubes Tools
- Select Qubes Update
- Check the "Enable updates for Qubes without known available updates"
- Select all the Qubes
- Click Next and wait for updates to complete
- If you checked the Tor option during install, be patient as this might take a while over Tor

### Hardening Qubes OS

Qubes OS sandboxes by design, but you can add extra protection inside VMs (through sandboxing apps):

#### AppArmor (Debian & Whonix VMs)

- **Debian VMs**: [Debian AppArmor Guide](https://wiki.debian.org/AppArmor)
- **Other Linux VMs**:
  - [Arch AppArmor Guide](https://wiki.archlinux.org/title/AppArmor)
  - [Debian Guide](https://wiki.debian.org/AppArmor)
- **Whonix VMs** (recommended):
  - [Whonix AppArmor Guide](https://www.whonix.org/wiki/AppArmor)
  - [Whonix + Qubes AppArmor](https://www.whonix.org/wiki/Qubes/AppArmor)

#### SELinux (Fedora VMs)

Fedora uses **SELinux** instead of AppArmor.

- [Fedora SELinux Guide](https://docs.fedoraproject.org/en-US/quick-docs/getting-started-with-selinux/)

Optional but useful for advanced users on Fedora templates.

### Setup the VPN ProxyVM

**Prerequisite:** This guide assumes you are using OpenVPN.
It works with providers like Mullvad, IVPN, Safing.io, ProtonVPN, etc.

#### 1. Create the VPN ProxyVM

1. Open the **Qubes Applications Menu** (upper left corner).
2. Click **Create Qubes VM**.
3. Set:
   - **Name:** e.g., `VPNGatewayVM`
   - **Type:** Standalone Qube (copy from template)
   - **Template:** `debian-11`
   - **Networking:**
     - `sys-whonix` (for VPN *over* Tor) — recommended.
     - `sys-firewall` (for Tor *over* VPN or VPN only).
4. Under **Advanced**:
   - Check **Provides network**.
   - Check **Start qube automatically on boot**.
5. Click **Create**.

#### 2. Download Your VPN Config Files

- If you can use Tor:
  - Launch **Disposable Tor Browser** via the Applications Menu.
  - Download your VPN provider’s OpenVPN config files (usually `.zip`).
- If you cannot use Tor:
  - Launch a regular **Disposable VM** browser.
  - Download the VPN config files.
- When done:
  - Right-click the downloaded file and **send** it to your new `VPNGatewayVM`.

#### 3. Configure the VPN ProxyVM

1. Open **Files** in your `VPNGatewayVM`.
2. Navigate to `QubesIncoming > dispXXXX` (your disposable VM).
3. Extract the downloaded VPN config `.zip`.

##### Install OpenVPN

Open a terminal in `VPNGatewayVM` and run:

```bash
sudo apt-get update
sudo apt-get install openvpn
```

##### Copy and Edit Configs

1. Copy VPN config files to `/etc/openvpn/`:

   ```bash
   sudo cp /path/to/your/configs/*.ovpn /etc/openvpn/
   ```

2. Edit each `.ovpn` file:

   ```bash
   sudo nano /etc/openvpn/your-config.ovpn
   ```

   - Change `proto udp` → `proto tcp`
   - Change the `port` to a TCP port your VPN supports (e.g., 80 or 443).
   - Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

##### Enable Auto Start

Edit `/etc/default/openvpn`:

```bash
sudo nano /etc/default/openvpn
```

Uncomment this line:

```conf
AUTOSTART="all"
```

Save and exit.

#### 4. Add Firewall (Kill Switch)

Edit `/rw/config/qubes-firewall-user-script`:

```bash
sudo nano /rw/config/qubes-firewall-user-script
```

Add:

```bash
virtualif=10.137.0.17  # Your ProxyVM's IP (change if needed)
vpndns1=10.8.0.1       # VPN DNS 1
vpndns2=10.14.0.1      # VPN DNS 2

# Block traffic if VPN goes down (Kill Switch)
iptables -F OUTPUT
iptables -I FORWARD -o eth0 -j DROP
iptables -I FORWARD -i eth0 -j DROP
ip6tables -I FORWARD -o eth0 -j DROP
ip6tables -I FORWARD -i eth0 -j DROP

# Allow DNS queries to VPN DNS
iptables -A OUTPUT -d 10.8.0.1 -j ACCEPT
iptables -A OUTPUT -d 10.14.0.1 -j ACCEPT

# Redirect all DNS queries to VPN DNS
iptables -F PR-QBS -t nat
iptables -A PR-QBS -t nat -d $virtualif -p udp --dport 53 -j DNAT --to $vpndns1
iptables -A PR-QBS -t nat -d $virtualif -p tcp --dport 53 -j DNAT --to $vpndns1
iptables -A PR-QBS -t nat -d $virtualif -p udp --dport 53 -j DNAT --to $vpndns2
iptables -A PR-QBS -t nat -d $virtualif -p tcp --dport 53 -j DNAT --to $vpndns2
```

Save and exit.

#### 5. Reboot the ProxyVM

```bash
sudo reboot
```

#### 6. Test VPN Connectivity

- Open a browser **inside your VPN ProxyVM**.
- Visit your VPN provider’s IP-check page:
  - Mullvad: [https://mullvad.net/en/check/](https://mullvad.net/en/check/)
  - IVPN: [https://www.ivpn.net/](https://www.ivpn.net/) (check the banner)
  - ProtonVPN: [VPN IP Change Guide](https://protonvpn.com/support/vpn-ip-change/)

#### Optional: VPN over Tor Setup

1. Clone a **Disposable Fedora VM** and name it `sys-VPNoverTor`.
2. In **Qube Settings**:
   - Set its **NetVM** to your new `VPNGatewayVM`.
3. Start a browser in your **Whonix Workstation**.
4. Verify VPN is active (check IP).

#### Optional: Tor over VPN Setup

1. Go to **Qube Settings** of `sys-whonix`.
2. Set **NetVM** to your `VPNGatewayVM`.
3. Launch a **Whonix Workstation Disposable VM**.
4. Open a browser and verify Tor and VPN connectivity.

#### Advanced: VPN over Tor over VPN

Example NetVM chain:

```txt
User > VPN ProxyVM 1 > sys-whonix (Tor) > VPN ProxyVM 2 > Internet
```

- ProxyVM 1 = VPN #1
- sys-whonix = Tor
- ProxyVM 2 = VPN #2

You can mix and match routes by chaining ProxyVMs and adjusting NetVM settings. Qubes OS makes these combinations flexible and modular.

### Setup an Android VM

Because sometimes you want to run mobile Apps anonymously too.

1. **Create the Android Qube:**
    - Open the Applications menu.
    - Click **Create Qubes VM**.
    - Name it (suggestion: *Android*) and pick a label.
    - Select **Type**: Standalone Qube copied from a template.
    - Select **Template**: Debian-11.
    - Select **Networking**:
      - Choose **sys-whonix** for Tor / VPN over Tor (recommended).
      - Choose **sys-firewall** for Tor over VPN or no Tor/VPN.
    - Start the Qube and open a Terminal.
2. **Install Anbox modules:**
    - Run: `git clone https://github.com/anbox/anbox-modules.git`
    - Change directory: `cd anbox-modules`
    - Run: `./INSTALL.sh`
    - Reboot the Qube.
3. **Install Snap and Anbox:**
    - Install Snap: `sudo apt install snapd`
    - Install Anbox: `snap install --devmode --beta anbox`
    - (To update later: `snap refresh --beta --devmode anbox`)
    - Reboot the Qube.
4. **Start Anbox (Android emulator):**
    - Open a terminal and run: `anbox.appmgr`
    - If it crashes, run it again.
5. **Install apps (APK files) on Anbox:**
    - Install ADB: `sudo apt install android-tools-adb`
    - Start Anbox: `anbox.appmgr`
    - Download the APK you want to install.
    - Install the APK: `adb install my-app.apk`

### KeePassXC

You will need somewhere to store your data (logins/passwords, identities, and TOTP information).
For this purpose, KeePassXC is recommended because of its integrated TOTP feature.
This is the ability to create entries for 2FA369 authentication with the authenticator feature.

In the context of Qubes OS you should store your sensitive information within the vault Qube:

- First, click the Applications icon (upper left) and select the vault Qube.
- Click Qubes Settings
- Select the Applications tab
- From the list of available applications, add KeePassXC to the list of selected applications.

## Quick note: Correlation vs Attribution

1. **Understand Key Concepts:**
   - *Correlation* shows that actions happened but doesn't prove *who* did them.
   - *Attribution* connects actions directly to a person or group, proving responsibility.
1. **How Attribution Works:**
   - Digital forensics uses *Indicators of Compromise (IoCs)* like IPs, usernames, and databases.
   - Traces (like an IP) only show activity, not identity, unless linked to real-world data.
1. **Common Mistakes Leading to Attribution:**
   - Leaking real identity while using anonymity tools (e.g., Tor users connecting accounts or leaking identifiable info).
   - Leaving persistent traces that can be tied back to IRL identity.
1. **Case Study – NotPetya Attack:**
   - Widely believed to be Russian state-sponsored but never officially attributed to Russia.
   - Attackers disguised their operations using ransomware fronts and foreign compromised servers.
1. **Learn From State Actor Techniques:**
   - Use layers of anonymity (Tor, VPNs).
   - Use hacked or stolen infrastructure to mask origin.
   - Avoid direct links between activity and real identity.
1. **Practical Takeaways:**
   - Correlation (e.g., matching IPs) is weak evidence without attribution.
   - To avoid attribution:
     - Hide IPs (use VPNs and Tor properly).
     - Prevent data leaks that can tie actions to your identity.
     - Practice strict compartmentalization between real identity and anonymous activity.
     - Regularly audit your operational security (OpSec).

## Methodology to Prevent Anonymity

### Captchas

#### **Why Captchas Target Anonymity**

- Tor/VPN users often get flooded with endless captchas.
- Even after solving them, Tor users often get blocked anyway.
- Sites use captchas as a gatekeeper against privacy tools.

#### **How Captchas Fingerprint You**

Modern captchas don’t just check if you clicked the right images — they profile you:

- **Browser fingerprinting** (browser, cookies, extensions, settings).
- **Cursor movement tracking** (speed, pattern, "human-ness").
- **Behavior tracking** before/during/after the puzzle.

Even if you hide your IP and clear cookies, they may still uniquely identify you based on interaction patterns.

#### **Known Patterns That Trigger More Captchas**

- Using **Tor** or **VPNs**.
- Using **ad-blockers** (e.g., uBlock).
- Using **non-Chromium browsers** (Firefox gets more captchas than Brave).
- Previously flagged accounts or IP addresses.

#### **Ways to Reduce Captchas**

1. **Use a Chromium-based browser** (e.g., Brave) to reduce Google reCAPTCHAs.
1. Use **Buster** (browser extension) to auto-solve captchas:
   - [Buster GitHub](https://github.com/dessant/buster)
1. For hCaptcha:
   - Use Cloudflare’s *Accessibility Cookie* → [hCaptcha Accessibility](https://www.hcaptcha.com/accessibility)
   - Install **Privacy Pass** extension → [Privacy Pass](https://privacypass.github.io/)
1. **Vary your behavior**:
   - Don’t move the mouse too perfectly.
   - Change speed/accuracy to avoid "Captcha Fingerprinting".

#### **Best Practices for Privacy**

- Consider **VPN over Tor** (VPN first, then Tor) to trigger fewer captchas.
- Optimal: Use a *self-hosted VPN/proxy* over Tor, paid anonymously (e.g., with Monero/cash).

### Phone verification

[see Getting an anonymous phone number](#getting-an-anonymous-phone-number).

### E-Mail verification

#### **Why It’s a Problem Today**

- **Disposable e-mail providers** get flagged (just like open proxies or Tor).
- Most platforms **block anonymous/disposable emails** at signup.
- Increasingly, even free email services demand a **phone number** (which can easily be traced back to you).

#### **Recommended Private Email Providers**

(For creating accounts without leaking your identity)

| Provider  | Website                                          | Notes                                     |
| --------- | ------------------------------------------------ | ----------------------------------------- |
| MailFence | [https://mailfence.com/](https://mailfence.com/) | Not zero-access; data readable by admins. |
| Disroot   | [https://disroot.org](https://disroot.org)       | Community-based, same limitation.         |
| Autistici | [https://autistici.org](https://autistici.org)   | Activist-friendly, but not zero-access.   |
| Envs.net  | [https://envs.net/](https://envs.net/)           | Smaller privacy-focused host.             |

:::warning

These services are *better* but still not zero-access.
They can technically read stored emails.

:::

#### **Email Aliasing = Extra Layer of Protection**

To avoid exposing your *real* anonymous email address:

- Use **aliasing services** to create throwaway addresses that forward to your private inbox.

#### Recommended Aliasing Services

| Service         | Website                                            | Notes                                     |
| --------------- | -------------------------------------------------- | ----------------------------------------- |
| **SimpleLogin** | [https://simplelogin.io/](https://simplelogin.io/) | Best free tier; flexible options.         |
| AnonAddy        | [https://anonaddy.com/](https://anonaddy.com/)     | Also strong; recommended by privacy orgs. |

#### **Best Practices**

- Avoid disposable inboxes like *Tempmail* — they’re automatically flagged.
- Never use a real phone number when setting up an anonymous identity.
- Use **email aliases** for every service you register with to avoid correlation.

### User details checking¶

Obviously, Reddit does not do this (yet), but Facebook most likely does and will look for "suspicious" things in your details (which could include face recognition).

Some examples:

- IP address from a country different than your profile country.
- Age in the profile not matching the picture age.
- Ethnicity in the profile not matching the picture ethnicity.
- Language not matching the country language.
- Unknown in anyone else contacts (Meaning nobody else knows you).
- Locking down privacy settings after signing up.
- Name that does not match the correct ethnicity/language/country?

### IP Filters

Many platforms block users based on IP addresses. Tor exit nodes are public and easy to block, and VPN IPs are widely known. Tools like Cloudflare make this filtering simple.

Platforms justify this by claiming they block:

- Harmful or illegal activity
- Trolls or propaganda
- Traffic that skews their ad data

In reality, they aim to avoid unprofitable or risky users.

#### Bypassing Filters

- **Tor**: Switch identities until you find an exit node that works. Some sites allow Tor logins but block sign-ups and keep permanent logs of signup IPs.
- **VPNs**: More tolerated but often come with extra CAPTCHAs and challenges.

#### Recommended Approach

- Use **VPN over Tor** for better access and privacy.
- Best: run your own **self-hosted VPN/proxy over Tor** on a VPS paid with anonymous methods like Monero.

Check this list to see which services block Tor:
[Services Blocking Tor](https://gitlab.torproject.org/legacy/trac/-/wikis/org/doc/ListOfServicesBlockingTor)

### Browser and Device Fingerprinting

Websites track users through **browser and device fingerprints** — details about your system like screen size, time zone, and graphics hardware.
This helps them both tailor the user experience and silently track you.

Even big platforms like Google block browsers they find suspicious based on fingerprint checks.
Tools like **CAPTCHAs** also rely on fingerprinting.
While some browsers and extensions claim to resist this, even fingerprint resistance can ironically make you more unique ([source](https://palant.info/2020/12/10/how-anti-fingerprinting-extensions-tend-to-make-fingerprinting-easier/)).

#### Common Fingerprint Data

- Browser (User-Agent), OS (Platform), and language
- Time zone, screen size, fonts
- Graphics (Canvas, WebGL), audio, CPU, RAM
- Ad blocker usage, cookie support, permissions (like mic or webcam)

Most systems end up with a **unique fingerprint** unless special precautions are taken.
This can track you across accounts and sites, even if you block ads and avoid logins.

#### Mitigation Tips

- Use **virtual machines**
- Follow **browser hardening guides**
- Use **fingerprint-resistant browsers** (e.g., Brave, Tor Browser)

#### Test Your Fingerprint

- [CreepJS](https://abrahamjuliot.github.io/creepjs/) (best)
- [Cover Your Tracks](https://coveryourtracks.eff.org/)
- [Am I Unique](https://amiunique.org)
- [BrowserLeaks](https://browserleaks.com/)
- [Device Info](https://www.deviceinfo.me/)
- [Extension Fingerprints (Chromium)](https://z0ccc.github.io/extension-fingerprints/#)

### Human interaction

Some platforms will add this as a bonus step and require you to have an actual human interaction with a customer care representative.
Usually by e-mail but sometimes by chat/phone.
They will want to verify that you exist by asking you to reply to an e-mail/chat/phone call.

It is annoying but quite easy to deal with in our case.
We are not making bots.
This guide is for humans making human accounts.

### Financial transactions

Simple and efficient, some platforms will require you to perform a financial transaction to verify your account sometimes under the pretext of verifying your age.
This could be a credit card verification or an exceedingly small amount bank wire.
Some will accept a donation in a main cryptocurrency like Bitcoin or Ethereum.

While this might seem innocent, this is obviously an ID verification and de-anonymization method.
This is just indirectly relying on third-party financial KYC regulations.

This is for instance now the case on YouTube for some European Users383 but also used by services like Amazon that requires a valid payment method for creating an account.

### Sign-in with Some Platform

Many apps now **force or encourage** you to sign in using big platforms like **Google, Facebook, Apple, or Twitter** instead of their own account system.
Often, this is the default option, while email/password sign-up is hidden using tricky design choices (dark patterns).
This shifts user verification to those big platforms, assuming you can’t easily make an anonymous account there.
However, it’s still possible to create such accounts with some effort.

### Facial Recognition and Biometrics

Some crypto platforms, dating apps, and even Facebook/Instagram now require **live facial verification** — like taking a selfie while doing an action or holding your ID.
Sometimes, they demand it through an **in-app camera** to block fake uploads.

This guide doesn’t fully cover this yet, as it's mainly used on financial sites and certain apps.
But bypassing it is tough.
One option is using **deepfake tools** like [FaceSwap](https://github.com/deepfakes/faceswap) to generate matching photos.
For apps needing live verification, tools like [DeepFaceLive](https://github.com/iperov/DeepFaceLive) can do real-time face swaps, but this is much more complex.

### Manual Reviews

Manual reviews happen when a platform’s staff evaluates your profile based on certain triggers.
If you pass, the verdict is usually final, and you avoid future issues.

**Pros**: The decision is often final, leading to fewer complications if you're approved.

**Cons**: If rejected, you may face a permanent ban without appeal.
Some platforms, like Instagram, may ghost you, making it impossible to appeal or resolve the issue.

## Getting Online

Now that you understand how you can be tracked and identified, here’s how to go online while staying anonymous.

First, understand this:
**You can't fully trust anyone or anything** — not ISPs, VPNs, Tor, your devices, or even people.
So instead of blind trust, **“Trust but verify”** (or take a stricter **Zero-Trust** approach).

Only proceed if:

- You’ve checked your local laws.
- You know your threat model.
- You’re in a safe location with public Wi-Fi, no smartphone/smart devices on you, and ideally no CCTV around.
- You’re prepared and have a plan in place.

**Important**: Most platforms now require phone number verification.
Your anonymity hinges on the anonymity of that number.
If the number or burner phone can be linked back to you, you can be de-anonymized.

If you can’t get an anonymous number or SIM, stick to platforms that don’t require phone verification.

### Creating New Identities

To build convincing fake identities (aka "legends"), create detailed backstories including:

- **Personal Info**: Name, age, gender, ethnicity, place/date of birth, residence, nationality, spoken languages.
- **Life Details**: Education, work experience, hobbies, family, religion, health info, goals, relationship status, personality traits, travel history.

Consistency is critical.
Every part of the identity must match across platforms.

**Helpful Tools:**

- [FakeNameGenerator.com](https://www.fakenamegenerator.com/)
- [ThisPersonDoesNotExist.com](https://thispersondoesnotexist.com/)
- [Generated Photos](https://generated.photos/face-generator) (watch for tracking)
- [StyleGAN2](https://github.com/NVlabs/stylegan2) for offline face generation
- [MyHeritage Deep Nostalgia](https://www.myheritage.com/deep-nostalgia) (VPN needed)
- [Microsoft Face API](https://azure.microsoft.com/en-us/services/cognitive-services/face/#demo) for face similarity

**Tips:**

- **Ethnicity, age, gender, and location** influence how verification systems treat your identity.
- Identities from Western countries (e.g., Norway, Germany) with EU IPs generally face fewer issues due to GDPR protections.
- Match your VPN or Tor exit node to your identity's location.
- Use Brave’s Private Tor tab over Tor Browser for better usability.
- Avoid big-name employers; choose freelance roles or public sector work.
- Store identity info (incl. TOTP 2FA secrets) in tools like KeePassXC.
- Use different phone numbers and emails for each identity.
- Tailor your writing style to match the identity.

**Tor Exit Node Customization:**

To force Tor to use specific countries or exclude some:

```txt
ExitNodes {CH},{RU},{UA}
StrictNodes 1

ExcludeNodes {FR},{DE},{US},{UK}
```

Edit the `torrc` file (on Tails/Whonix or Tor Browser).

### Checking if Your Tor Exit Node Is Bad

**Skip this if you're using a VPN or proxy over Tor.**

Not all Tor exit nodes are equal—some are blacklisted more heavily than others.
Here's how to check:

**Steps:**

1. Open the **target website** in a Tor Browser tab.
1. Click the **Tor Circuit icon** (next to the lock icon in the address bar).
1. Note the **third IP** (your Exit Node IP).
1. Open [MX Toolbox – Blacklist Check](https://mxtoolbox.com/blacklists.aspx).
1. Enter the Exit IP. If it says “You are on a blacklist,” check how many.
   - **Ideally**: Only 1–2 lists.
   - **Red flags**: Spamhaus ZEN, DAN TOR, or DAN TOREXIT.

If the IP is fairly clean, go back and use the site.
If it’s blacklisted, refresh your Tor circuit (Ctrl+Shift+L or restart the browser) to get a new Exit Node and repeat.

### The Real-Name System

Many services—especially those from Microsoft and Facebook—require real names in their Terms of Service (ToS).
However, in **Germany**, courts have ruled that users are legally allowed to use pseudonyms online (see §13 VI of the 2007 German Telemedia Act).
ToS cannot override national law.

This guide is intended for **German users living in Germany**.
In other countries, using a fake name might violate ToS, even if it's not illegal.
Check your local laws.

Some platforms avoid real-name ToS by requiring verified **payment methods** (e.g.  Visa, PayPal).
These fall under KYC laws and effectively enforce real-name use anyway—even in places where pseudonyms are allowed.

### About paid services

If you intend to use paid services, privilege those accepting cash payments or Monero payments which you can do directly and safely while keeping your anonymity.
If the service you intend to buy does not accept those but accepts Bitcoin (BTC), consider the following appendix: [Appendix Z: Paying anonymously online with BTC (or any other cryptocurrency)]

### How to Chat & Share Files Anonymously

When choosing a secure messaging or file-sharing app, prioritize **privacy**, **encryption**, and **anonymity** — not just good UX.

#### 1. End-to-End Encryption (E2EE)

- Only sender and receiver can read messages.
- Beware: some apps claim E2EE but have gaps (e.g., no protection for **metadata**, or disabled by default).
- **Open-source** apps or independently audited ones are safer.

#### 2. Don’t Roll Your Own Crypto

- Avoid apps that implement their own cryptography unless widely **peer-reviewed**.
- Crypto needs academic vetting — not DIY solutions.

#### 3. Forward Secrecy (PFS)

- Uses a **new key per session**, so past conversations stay secure even if one key is compromised.
- Often missing in group chats or poorly implemented for convenience.

#### 4. Zero-Access Encryption at Rest

- Even **stored data** (like backups or chat logs) is encrypted on your side.
- The service provider **cannot decrypt** it — this would have prevented cases like the **Cambridge Analytica scandal**.

#### 5. Metadata Protection

- Metadata includes: who you talk to, when, how long, etc.
- Apps like **Signal** (via features like Sealed Sender) and **Briar** (via Tor + local storage) protect this.
- Most mainstream apps **leak metadata** heavily.

#### 6. Open Source

- Prefer **open-source** tools so encryption claims can be verified.
- Transparency > Trust in marketing.

**Choosing the Right Tool:**

If your priorities are **privacy**, **anonymity**, and **open-source transparency**, use:

- **Briar** (best for extreme anonymity, no servers, uses Tor)
- **Cwtch** (privacy-first, anonymous, decentralized)
- **OnionShare** (file sharing + messaging over Tor)
- **Jami** (decentralized, P2P)
- **Element (Matrix)** — only if configured properly for E2EE and hosted yourself
- **Gajim/XMPP** — only with secure plugins like **OMEMO** and a trusted server

### How to Share Files Publicly

:::warning

Before sharing, remove any personal or identifying information.

:::

#### Encrypted File Sharing Platforms

- **Cryptpad** ([cryptpad.fr](https://cryptpad.fr))
  E2EE, free up to 1 GB. Recommended by PrivacyGuides.
- **Proton Drive** ([proton.me/drive](https://proton.me/drive))
  E2EE, paid (Unlimited or Mail Plus). Not easy to sign up anonymously (Tor triggers phone/donation verification).
- **Filen** ([filen.io](https://filen.io))
  E2EE, free up to 10 GB.

#### Decentralized Option

- **Pinata (IPFS)** ([pinata.cloud](https://www.pinata.cloud))
  Free IPFS hosting, up to 1 GB.

### Redacting Documents Safely

To share text, images, or video **anonymously**, follow these guidelines:

- **Avoid proprietary software** (e.g., Microsoft Office, Adobe Photoshop) — they may:
  - Leak telemetry
  - Add metadata/watermarks
  - Require identifiable purchases
- **Use open-source tools** like:
  - **LibreOffice** (documents, PDFs)
  - **GIMP** (images)
  - **Audacity** (audio)
  - **Flowblade**, **Olive**, **Shotcut**, **OpenShot** (video)
  - **Vokoscreen** (screen recording)
  - **VLC** (media playback)
  - **PDF-Redact Tools** or **LibreOffice** (PDF redaction)
- For **online collaboration**, prefer:
  - [Cryptpad.fr](https://cryptpad.fr)
  - [Etherpad.org](https://etherpad.org)
  - [Privatebin.net](https://privatebin.net)
- **Run tools inside Tails or a virtual machine** to reduce risk of leaks.

Before publishing, **sanitize your files** (see [Removing Metadata]).

### Communicating Sensitive Information

If you need to share information anonymously with organizations (e.g., the press), take these precautions:

- Use **SecureDrop** ([https://securedrop.org/](https://securedrop.org/)) over Tor for anonymous, secure communication.
  - Read their [Source Guide](https://docs.securedrop.org/en/stable/source.html).
  - Find SecureDrop Tor addresses here: [https://github.com/alecmuffett/real-world-onion-sites#securedrop](https://github.com/alecmuffett/real-world-onion-sites#securedrop).
- If SecureDrop is unavailable, use **end-to-end encrypted** methods:
  - **Email with GPG encryption** (ensure recipient’s public key is verified from official sources like verified social media, Keybase, or trusted OpenPGP servers).
  - Other platforms (e.g., Twitter DMs) encrypted with GPG.
- **Avoid:**
  - Sending physical mail (risks DNA/fingerprint leaks).
  - Phone-number linked apps (Signal, WhatsApp, Telegram).
  - Voice/video calls.
  - Revealing any identity clues.
  - In-person meetings unless absolutely necessary.
- If you need to reveal your identity later, carefully assess risks and legality, and consider consulting a trusted lawyer.

**Maintenance:**

- Keep anonymous accounts active by logging in regularly.
- Monitor emails for security notices.
- Check for identity leaks using [https://haveibeenpwned.com/](https://haveibeenpwned.com/) from a secure environment.

## Backing up your work securely

Do not ever upload encrypted file containers with plausible deniability (hidden containers within them) to most cloud services (iCloud, Google Drive, OneDrive, Dropbox) without safety precautions.
This is because most cloud services keep backups/versioning of your files, and such backups/versioning of your encrypted containers can be used for differential analysis to prove the existence of a hidden container.

### Selected Files Backups

**Requirements:**

- USB stick or external drive with enough space.
- Veracrypt (Linux, Windows, macOS).

**Standard Containers:**

- Create a Veracrypt container to store files.
- Use backup tools or copy files manually.
- Can be stored anywhere (preferably external storage).

**Hidden Containers (Plausible Deniability):**

- Create an outer volume (decoy) and a hidden volume (real data).
- Depending on the password, Veracrypt mounts either the decoy or the hidden volume.
- When modifying the outer volume, enable "Protect hidden volume" and enter both passwords.

**Security Guidelines:**

- Keep only one version of each container. Never let multiple versions exist.
- Only mount from guest VMs, not host OS.
- Avoid cloud storage and versioning systems.
- Wipe USB drives before modifying hidden containers.
- If host OS is used, clean all traces afterward (logs, recent files, etc.).

### Full Disk/System Backups

Use Clonezilla for full system backups.
It works reliably on most OSes except macOS, where you should use Time Machine or Disk Utility instead.
Do not back up a hidden Windows OS—this breaks plausible deniability.

## Online Backups

:::danger[]

**Never upload Veracrypt containers with plausible deniability** to any platform you don’t fully control.
Cloud services often retain old versions, which can compromise hidden data.
Only upload **encrypted** files (e.g. Veracrypt with strong passphrases) and **never** trust cloud provider encryption - encrypt locally first.

:::

### File Storage

**Plausible Deniability (Not Recommended Online):**

- Do *not* upload containers with hidden volumes to cloud platforms (Dropbox, Google Drive, etc.).
- These services often retain historical data, breaking plausible deniability.
- Only exception: cold storage (never modified after upload).

**Normal Encrypted Files (Allowed):**

- Encrypt locally (e.g. Veracrypt, Cryptomator).
- Safe to upload to any service *after* encryption.
- Recommended: privacy-respecting platforms like:
  - [Cryptpad.fr](https://cryptpad.fr/) – 1GB free
  - [Filen.io](https://filen.io/) – 10GB free

> Only access these backups from a **secure device or VM**.

**Self-Hosting:**

- Using services like **Nextcloud** is fine if:
  - You **host anonymously**
  - You follow privacy best practices
    See: *Appendix A1: Recommended VPS providers* and *Appendix B2: Monero Disclaimer*.

**Secure Text/Note Storage:**

For storing small pieces of information:

- [PrivateBin](https://privatebin.info/)
- [CryptPad Notes](https://cryptpad.fr/pad/)

> Protect pads with a password and save the link somewhere secure.

### Synchronizing your files between devices Online¶

To that, the answer is very simple and a clear consensus for everyone: [https://syncthing.net/](https://syncthing.net/)
Just use SyncThing, it is the safest and most secure way to synchronize between devices, it is free and open-source, and it can easily be used in a portable way without install from a container that needs syncing.

## Covering your tracks

### Understanding HDD vs SSD

- **HDDs** store data magnetically in fixed locations, making secure deletion (e.g., overwriting) straightforward.
- **SSDs** use internal mechanisms like **wear-leveling**, making secure deletion much harder and traditional tools ineffective.

#### Types of SSDs

- **ATA (SATA)** – often 2.5" format
- **NVMe (M.2)** – newer and faster

Know your drive type, as deletion methods differ.

#### Wear-Leveling

- SSDs spread writes evenly across blocks to prevent wear.
- This means **overwriting doesn't guarantee actual erasure**—the drive may just write the new data elsewhere.
- As a result, **secure deletion tools made for HDDs are useless on SSDs**.

#### TRIM Operations

- **TRIM** tells the SSD which blocks can be erased after a file is deleted.
- Modern OSes (macOS, Windows, Linux, Qubes) usually enable TRIM by default.
- **TRIM doesn’t delete data directly**, but marks it for erasure—handled later by the SSD's **garbage collection**.

#### Why TRIM matters

- Without TRIM, deleted data may linger.
- With TRIM and modern SSDs, **deleted data becomes unreadable (e.g. returns zeroes)** via *Deterministic Zeroes After Trim*.

:::warning

 **Veracrypt containers with plausible deniability should not be used on TRIM-enabled SSDs**, as TRIM can invalidate hidden volumes and break deniability.

:::

#### Garbage Collection

- SSDs periodically clean up blocks marked by TRIM.
- It **moves valid data** to a new block, then **erases** the old block—permanently removing deleted data.
- Works better when TRIM is enabled, but operates even without it.

#### Conclusion

- **SSDs + TRIM + Full Disk Encryption = reasonable deletion security**
- While **not 100% forensically safe**, recovering trimmed SSD data is very difficult and unlikely without high-end tools and expert knowledge.
- **Use full disk encryption** and make sure **TRIM is enabled** for safe everyday deletion on SSDs.

### How to securely wipe your whole Laptop/Drives

#### SSDs

**Best Methods:**

- Use **BIOS/UEFI Secure Erase** or **Sanitize**.
- Use tools like **PartedMagic** for easy secure erase.
- Reinstall OS with **full disk encryption** (LUKS, BitLocker, FileVault).

**Advanced (less reliable due to wear leveling):**

- `dd if=/dev/urandom of=/dev/sdX bs=8M status=progress conv=fsync`
  *(run twice to target overprovisioned areas)*
- `wipe -qQ2 /dev/sdX` or `srm -P /dev/sdX` for multi-pass overwrites.

#### HDDs

**Software Wipe:**

- `shred -vzn 3 /dev/sdX`
- `wipe /dev/sdX`
- `srm -G /dev/sdX`

**Physical Destruction (best for sensitive data):**

- Open drive, remove and destroy platters.

#### USB Drives / External SSDs

**If SSD:**

- `blkdiscard /dev/sdX` if supported.
- Otherwise, encrypt or overwrite (`dd` or `shred`).

**If HDD or Flash:**

- `shred -vzn 3 /dev/sdX`
- Or: `dd if=/dev/zero of=/dev/sdX bs=1M status=progress`

#### Tips

- Always wipe the **entire device**, not just partitions.
- SSDs: Prefer secure erase or encryption over overwriting.
- Encrypt drives before use for easier future wiping.

### How to securely delete specific files/folders/data on your HDD/SSD and Thumb drives¶

The same principles from the earlier chapters apply to this one.
The same issues arise too.

Remember tho that no matter the deletion method you use for any file on any medium (HDD drive, SSD, USB Thumb drive).
It will probably leave other traces (logs, indexing, shellbags ...) within your system and those traces will also need to be cleaned.
Also, remember that your drives should be fully encrypted and so this is most likely an extra measure.
