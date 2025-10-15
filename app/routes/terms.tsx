import type { Route } from './+types/privacy';

// biome-ignore lint/correctness/noEmptyPattern: react-router default
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export function ServerComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>

        <p className="text-sm text-gray-600 mb-6">
          Effective date: 1st October 2025
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Please read these terms carefully. By downloading, accessing or
            using the Keep Fresh application you agree on our terms of use. If
            you do not agree to these term of use, please do not use the
            service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Changes to Terms
          </h2>

          <p>
            We withhold the right to change or accommodate these terms of use at
            any time and at our own discretion. However, if we do so, we will
            notify you about such changes before you use our service. This may
            be communicated via email.
          </p>

          <p>
            Through continual usage of the service you accept the changes of the
            terms of use. If you do not agree on the updated changes, please do
            not continue to use the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Limitation of Liability
          </h2>

          <p>
            You agree that under no circumstances will we or our respective
            officers, directors, employees or agents, be liable to you for any
            direct, indirect, incidental, special, punitive, or consequential
            damages whatsoever, even if we have been advised of the possibility
            of such damages, whether based on warranty, contract, tort, or any
            other legal theory, and whether arising by law, statute, usage of
            trade, custom, course of dealing or performance, or the parties'
            conduct or communication with one another, or as a result of the
            nature of these terms of use or in conformity with usage, equity or
            law or otherwise, arising out of or in connection with the app
            including, but not limited to, any: (a) use, inability to use or
            performance of the app; (b) errors, mistakes, or inaccuracies of
            content of or software underlying the app; and/or (c) interruption
            or cessation of service or of transmission of the app.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Assignment and Severability
          </h2>

          <p>
            These Terms, and any rights or licenses granted or waived herein,
            may not be transferred or assigned by you, but may be assigned by us
            without restriction. In the event that any provision is determined
            to be unenforceable or invalid, that provision will nonetheless be
            enforced to the fullest extent permitted by applicable law, and that
            determination will not affect the validity and enforceability of any
            other remaining provisions of these terms. The failure of us to
            exercise or enforce any right or provision of these terms shall not
            operate as a waiver of such right or provision. The headings used in
            these terms are included for convenience only and will not limit or
            otherwise affect these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Termination
          </h2>

          <p>
            We may, in our sole discretion, terminate or suspend your access to
            all or part of the App at any time, with or without notice, for any
            reason, including, without limitation, breach of these terms.
          </p>
        </div>
      </div>
    </div>
  );
}
