import os
import sys
import time
import shutil
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:3000"
ARTIFACT_DIR = r"C:\Users\Mohd Azimullah\.gemini\antigravity\brain\1576139e-f276-424a-946b-3c36f66e1787\screenshots"

os.makedirs("screenshots/desktop", exist_ok=True)
os.makedirs("screenshots/mobile", exist_ok=True)
os.makedirs("screenshots/interactions", exist_ok=True)
os.makedirs(ARTIFACT_DIR, exist_ok=True)

pages_to_test = [
    {"name": "01_home", "path": "/"},
    {"name": "02_services", "path": "/services"},
    {"name": "03_products", "path": "/products"},
    {"name": "04_gallery", "path": "/gallery"},
    {"name": "05_about", "path": "/about"},
    {"name": "06_contact", "path": "/contact"},
]

print("Starting Playwright Visual Verification...")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # 1. Desktop Viewport (1440x900)
    print("\n--- Capturing Desktop Viewports (1440x900) ---")
    desktop_context = browser.new_context(viewport={"width": 1440, "height": 900})
    desktop_page = desktop_context.new_page()

    for item in pages_to_test:
        url = f"{BASE_URL}{item['path']}"
        print(f"Desktop -> {url}")
        desktop_page.goto(url, wait_until="load")
        desktop_page.wait_for_timeout(1500)
        
        target_path = f"screenshots/desktop/{item['name']}.png"
        desktop_page.screenshot(path=target_path, full_page=True)
        artifact_target = os.path.join(ARTIFACT_DIR, f"desktop_{item['name']}.png")
        shutil.copy2(target_path, artifact_target)
        print(f"  Saved: {target_path} ({os.path.getsize(target_path)} bytes)")

    # 2. Mobile Viewport (375x812 - iPhone X)
    print("\n--- Capturing Mobile Viewports (375x812) ---")
    mobile_context = browser.new_context(
        viewport={"width": 375, "height": 812},
        user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
    )
    mobile_page = mobile_context.new_page()

    for item in pages_to_test:
        url = f"{BASE_URL}{item['path']}"
        print(f"Mobile -> {url}")
        mobile_page.goto(url, wait_until="load")
        mobile_page.wait_for_timeout(1500)
        
        target_path = f"screenshots/mobile/{item['name']}_mobile.png"
        mobile_page.screenshot(path=target_path, full_page=True)
        artifact_target = os.path.join(ARTIFACT_DIR, f"mobile_{item['name']}.png")
        shutil.copy2(target_path, artifact_target)
        print(f"  Saved: {target_path} ({os.path.getsize(target_path)} bytes)")

    # 3. Interactive Component Verification
    print("\n--- Testing Interactive States ---")

    # A. Gallery Category Filtering
    print("Testing Gallery Category Filter (Mandir Backdrops)...")
    desktop_page.goto(f"{BASE_URL}/gallery", wait_until="load")
    desktop_page.wait_for_timeout(1000)
    desktop_page.click("button:has-text('Mandir Backdrops')")
    desktop_page.wait_for_timeout(800)
    filter_target = "screenshots/interactions/01_gallery_filter_mandir.png"
    desktop_page.screenshot(path=filter_target)
    shutil.copy2(filter_target, os.path.join(ARTIFACT_DIR, "interact_01_gallery_filter.png"))
    print(f"  Saved filter capture: {filter_target}")

    # B. Lightbox Modal Click
    print("Testing Lightbox Modal Open...")
    desktop_page.click(".group.relative.bg-white:first-child")
    desktop_page.wait_for_timeout(800)
    lightbox_target = "screenshots/interactions/02_lightbox_modal.png"
    desktop_page.screenshot(path=lightbox_target)
    shutil.copy2(lightbox_target, os.path.join(ARTIFACT_DIR, "interact_02_lightbox.png"))
    print(f"  Saved lightbox capture: {lightbox_target}")

    # C. Mobile Menu Drawer
    print("Testing Mobile Drawer Menu Open...")
    mobile_page.goto(f"{BASE_URL}/", wait_until="load")
    mobile_page.wait_for_timeout(1000)
    mobile_page.click("button[aria-label='Toggle Navigation Menu']")
    mobile_page.wait_for_timeout(800)
    menu_target = "screenshots/interactions/03_mobile_drawer_open.png"
    mobile_page.screenshot(path=menu_target)
    shutil.copy2(menu_target, os.path.join(ARTIFACT_DIR, "interact_03_mobile_drawer.png"))
    print(f"  Saved mobile menu capture: {menu_target}")

    # D. FAQ Accordion Click
    print("Testing FAQ Accordion Expand...")
    desktop_page.goto(f"{BASE_URL}/", wait_until="load")
    desktop_page.wait_for_timeout(1000)
    # Scroll to FAQ and click first button
    desktop_page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.75)")
    desktop_page.wait_for_timeout(800)
    faq_target = "screenshots/interactions/04_faq_accordion.png"
    desktop_page.screenshot(path=faq_target)
    shutil.copy2(faq_target, os.path.join(ARTIFACT_DIR, "interact_04_faq_accordion.png"))
    print(f"  Saved FAQ capture: {faq_target}")

    browser.close()

print("\nAll 16 visual captures completed successfully!")
