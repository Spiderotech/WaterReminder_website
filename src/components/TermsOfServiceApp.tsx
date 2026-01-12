import React from 'react'

const TermsOfServiceApp = () => {
  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-gray-700">
           <p className="leading-relaxed text-sm text-gray-500 mt-4">
            <strong>Effective Date:</strong> 17 October 2025
          </p>

          <p className="leading-relaxed">
            These Terms & Conditions (“Terms”) govern your use of DoraDrink, provided by Spidero Technology (“we,” “our,” “us”).
            By downloading or using DoraDrink, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">1. Use of the App</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>DoraDrink is provided for<strong> personal and non-commercial use</strong> only.</li>
              <li>You may not copy, modify, distribute, or reverse-engineer the app.</li>
              <li>You must not use DoraDrink for any unlawful purpose.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">2. Acceptable Use</h2>
            <p className="mb-4">You agree not to misuse DoraDrink, including by:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Attempting to access, disrupt, or probe non-public app components.</li>
              <li>Using automation or scraping tools.</li>
              <li>Introducing malware or harmful code.</li>
              <li>Infringing any laws or third-party rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>You are responsible for keeping your device secure.</li>
              <li>
                You must ensure the information you provide (gender, age, height, weight, activity level, climate, hydration
                goal, reminder times) is accurate.
              </li>
              <li>Some features may not function if you deny permissions (e.g., notifications, alarms).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">4. Health Disclaimer</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>DoraDrink is a<strong> wellness tool</strong> designed to help you stay hydrated by estimating water needs and sending reminders.</li>
              <li>Calculations are based on general formulas using gender, age, height, weight, activity level, climate, and daily schedule.</li>
              <li>DoraDrink does not provide medical or diagnostic services.</li>
              <li>Spidero Technology is not responsible for health consequences resulting from reliance on DoraDrink.</li>
              <li>Always consult a healthcare professional for personalized medical advice.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">5. Permissions & Special Access</h2>
            <p className="mb-4">DoraDrink may request certain device permissions (see Privacy Policy).</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Exact alarms are used solely to deliver reminders at the exact times you select.</li>
              <li>Notification Access, if granted, is used only to pause or snooze reminders during calls or DND.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">6. Privacy & Data</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>DoraDrink does not collect, upload, or share personal data.</li>
              <li>Data remains stored locally on your device.</li>
              <li>
                Use of DoraDrink is subject to our{' '}
                <a
                  href="/privacy-policy-app"
                  className="text-blue-400 hover:underline font-medium underline"
                >
                  Privacy Policy
                </a>.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">7. Data Deletion</h2>
            <p className="mb-4">
              All data collected by DoraDrink (including height, weight, gender, age, activity level, climate settings,
              sleep/wake times, and hydration goals) is stored locally on your device. DoraDrink does not transmit or store your personal data on any servers.
            </p>
            <p>
              You can delete all data at any time by uninstalling the app. If you require additional assistance with data deletion,
              please contact us at{' '}
              <a href="mailto:support@doradrink.com" className="text-blue-600 hover:underline">
                support@doradrink.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">8. App Availability & Updates</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>We may change, update, or discontinue parts of the app at any time.</li>
              <li>We are not responsible for any unavailability or loss caused by updates, maintenance, or platform changes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">9. Third-Party Links</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>DoraDrink may open external links (e.g., help pages).</li>
              <li>We are not responsible for the content, security, or practices of third-party websites.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">10. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>DoraDrink, its design, logo, and code are owned by <strong>Spidero Technology</strong>.</li>
              <li>You may not copy, modify, or redistribute DoraDrink without written permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">11. Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>DoraDrink is provided <strong>“as is”</strong> without warranties of any kind.</li>
              <li>
                Spidero Technology is not liable for:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Health-related issues arising from use of DoraDrink.</li>
                  <li>Data loss or device errors caused by the app.</li>
                  <li>Any indirect, incidental, or consequential damages.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">12. Indemnity</h2>
            <p>
              You agree to indemnify and hold Spidero Technology harmless from claims, damages, or losses arising from your
              misuse of the app or violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">13. Termination</h2>
            <p>We may suspend or terminate your use of DoraDrink if you breach these Terms.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">
              14. Severability; No Waiver; Entire Agreement
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>If any provision is found unenforceable, the remaining terms remain valid.</li>
              <li>Our failure to enforce a provision does not constitute a waiver.</li>
              <li>These Terms constitute the entire agreement between you and Spidero Technology regarding DoraDrink.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">15. Governing Law</h2>
            <p>These Terms are governed by the laws of the <strong>United Kingdom</strong>.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">16. Support</h2>
            <p>
              For assistance, contact us at{' '}
              <a href="mailto:support@doradrink.com" className="text-blue-600 hover:underline">
                support@doradrink.com
              </a>. Support is provided on a reasonable-efforts basis without guarantees.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">17. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Updates will be posted in-app or on our website. Continued use
              after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider ">18. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:<br />
              <strong>Email:</strong>{' '}
              <a href="mailto:support@doradrink.com" className="text-blue-600 hover:underline">
                support@doradrink.com
              </a>
              <br />
              <strong>Company:</strong> Spidero Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsOfServiceApp
