import React from 'react'

const PrivacyPolicyApp = () => {
  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-sm text-gray-500 mt-4">
            <strong>Effective Date:</strong> 17 October 2025
          </p>
          <p className="leading-relaxed">
            <strong>Spidero Technology</strong> (“we,” “our,” “us”) built <strong>DoraDrink</strong> (“the App”) to help users stay hydrated by providing customizable reminders and tracking daily water intake. This Privacy Policy explains how DoraDrink handles your information, including the personal data you provide, the device permissions we request, and your rights under UK data protection law.
          </p>

          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              When setting up DoraDrink, you may enter the following information:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Gender</li>
              <li>Height (cm)</li>
              <li>Weight (kg)</li>
              <li>Age (years)</li>
              <li>Wake-up and sleep times</li>
              <li>Activity level (sedentary, light, moderate, very active)</li>
              <li>Climate in your area</li>
              <li>Daily hydration goal (ml/liters) and reminder count</li>
            </ul>
            <p className="leading-relaxed mt-4">
              This information is used <strong>only to calculate your recommended daily water intake and to schedule hydration reminders.</strong> DoraDrink does not require you to create an account or provide contact details.
            </p>
          </div>

          {/* 2. How We Use Information */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">2. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>To calculate personalized hydration goals.</li>
              <li>To deliver reminder notifications at the times you choose.</li>
              <li>To adjust calculations based on activity level, climate, and lifestyle inputs.</li>
              <li>To restore reminders after device restarts.</li>
              <li>To improve app reliability and user experience.</li>
            </ul>
          </div>

          {/* 3. Data Storage & Sharing */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">3. Data Storage & Sharing</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>All personal data is <strong>stored locally on your device only.</strong></li>
              <li>DoraDrink does<strong> not transfer, upload, sell, or share your personal data</strong> with Spidero Technology or third parties.</li>
              <li>DoraDrink is designed to function<strong> completely offline.</strong></li>
            </ul>
          </div>

          {/* 4. Permissions We Use */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">4. Permissions We Use</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>POST_NOTIFICATIONS</strong> – to send you daily hydration reminders.</li>
              <li><strong>VIBRATE</strong> – to add vibration to reminder notifications.</li>
              <li><strong>RECEIVE_BOOT_COMPLETED</strong> – to restore scheduled reminders when your device restarts.</li>
              <li><strong>SCHEDULE_EXACT_ALARM</strong> – to deliver reminders at the <strong>exact times</strong> you select, even during idle or battery saver modes.</li>
              <li><strong>INTERNET</strong> – used for basic connectivity (e.g., opening help pages). DoraDrink does not upload or transmit personal data.</li>
              <li><strong>Notification Access (optional)</strong> – if enabled, DoraDrink may detect limited notification metadata (such as ongoing calls or Do Not Disturb mode) so reminders can pause or snooze. DoraDrink does<strong> not read message content</strong>, and no notification data is stored or shared.</li>
            </ul>
          </div>

          {/* 5. Third-Party Services */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              DoraDrink does not integrate with advertising or analytics SDKs. If we introduce third-party services in future, this Privacy Policy will be updated and users will be notified.
            </p>
          </div>

          {/* 6. Who Controls Your Data */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">6. Who Controls Your Data (Data Controller)</h2>
            <p className="leading-relaxed">
              Spidero Technology is the data controller for DoraDrink. Because DoraDrink is designed to work entirely offline, we do not receive or process your personal data on our servers.
            </p>
          </div>

          {/* 7. Legal Bases */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">7. Legal Bases (UK GDPR)</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>Performance of contract</strong> – to provide the core hydration reminder functionality you choose to use.</li>
              <li><strong>Legitimate interests</strong> – to keep reminders reliable, including restoring them after device restart.</li>
              <li><strong>Consent</strong> – when Android prompts you to grant permissions like Notifications or Notification Access. You can withdraw by disabling those permissions at any time in system settings.</li>
            </ul>
          </div>

          {/* 8. Your Rights */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">8. Your Rights</h2>
            <p className="leading-relaxed mb-2">
              Subject to UK data protection law, you may have rights to <strong>access, rectify, erase, restrict, object to processing, and data portability</strong>.
            </p>
            <p className="leading-relaxed mb-2">
              Because DoraDrink stores data<strong> only on your device</strong>, you can exercise these rights directly by:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Editing or deleting your data inside the app.</li>
              <li>Clearing DoraDrink’s storage in your device settings.</li>
              <li>Uninstalling the app.</li>
            </ul>
            <p className="leading-relaxed mt-2">
              You may also contact us at <a href="mailto:support@doradrink.com" className="text-blue-600 underline">support@doradrink.com</a> for guidance.
            </p>
          </div>

          {/* 9. Data Retention & Deletion */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">9. Data Retention & Deletion</h2>
            <p className="leading-relaxed mb-2">
              DoraDrink stores your hydration preferences and inputs <strong>only on your device</strong>.
            </p>
            <h2 className="text-lg font-bold text-gray-800 mb-1 tracking-wider ">Data Deletion</h2>
            <p className="leading-relaxed mb-2">
              All data collected by DoraDrink (including height, weight, gender, age, activity level, climate settings, sleep/wake times, and hydration goals) is stored locally on your device. DoraDrink does not transmit or store your personal data on any servers.
            </p>
            <p className="leading-relaxed">
              You can delete all data at any time by uninstalling the app. If you require additional assistance with data deletion, please contact us at <a href="mailto:support@doradrink.com" className="text-blue-600 underline">support@doradrink.com</a>.
            </p>
          </div>

          {/* 10. International Data Transfers */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">10. International Data Transfers</h2>
            <p className="leading-relaxed">
              DoraDrink does not transmit personal data off your device. As a result, we do <strong>not </strong>transfer your personal data internationally.
            </p>
          </div>

          {/* 11. Complaints */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">11. Complaints</h2>
            <p className="leading-relaxed">
              If you have concerns, please contact us at <a href="mailto:support@doradrink.com" className="text-blue-600 underline">support@doradrink.com</a>. You also have the right to lodge a complaint with the UK Information Commissioner’s Office (ICO).
            </p>
          </div>

          {/* 12. Security */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">12. Security</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Since all personal data is stored locally, its security depends on your device safeguards (PIN, password, encryption).</li>
              <li>We recommend using a secure passcode and keeping your device updated.</li>
            </ul>
          </div>

          {/* 13. Children’s Privacy */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">13. Children’s Privacy</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>DoraDrink is not directed to children under 13.</li>
              <li>We do not knowingly collect information from children.</li>
              <li>If a child has provided data, please contact us to have it deleted.</li>
            </ul>
          </div>

          {/* 14. Health Disclaimer */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">14. Health Disclaimer</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>DoraDrink uses gender, age, height, weight, activity level, climate, and lifestyle inputs to <strong>estimate hydration needs</strong> based on general wellness formulas.</li>
              <li>These values are for <strong>guidance only</strong> and may not reflect individual medical requirements.</li>
              <li>DoraDrink is <strong>not a medical device</strong> and should not replace professional medical advice.</li>
              <li>Always consult a healthcare professional for personalized guidance.</li>
            </ul>
          </div>

          {/* 15. Changes to this Policy */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">15. Changes to this Policy</h2>
            <p className="leading-relaxed">
              If we make material changes, we will update the <strong>Effective Date</strong> and provide notice in-app and/or on our website. Continued use after changes take effect constitutes acceptance of the updated Policy.
            </p>
          </div>

          {/* 16. Contact Us */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">16. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions, please contact us:<br />
              <strong>Email: </strong><a href="mailto:support@doradrink.com" className="text-blue-600 underline">support@doradrink.com</a><br />
              <strong>Company: </strong>Spidero Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyApp
