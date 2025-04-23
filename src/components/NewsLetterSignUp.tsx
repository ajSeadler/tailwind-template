import { useState } from "react";

const NewsLetterSignUp = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGZiOGYxYTA3MjUxNzRiOThiN2RhNGI3ZGE5ZjU5NTBkNWUwMDg5NjBmZTYxNWZhOWE5YmQ0NTg4ZGVkNjQwZTQwMjU5ZTFmODhhYjU0YzAiLCJpYXQiOjE3NDU0MjAxNTAuMDk1MjQ1LCJuYmYiOjE3NDU0MjAxNTAuMDk1MjQ4LCJleHAiOjQ5MDEwOTM3NTAuMDg5ODk2LCJzdWIiOiIxNDg2MzU3Iiwic2NvcGVzIjpbXX0.k0xCFygmdJyVB47qm5DOLGbs_4jGTD1sSQspECGOS6XdQGI_Na0rWPRSZIolugyIpRGEbYxhtSZcumLF20RknasoLpL__KELRqpWLFM2e6E9RJTCRuEkBdHBNwbYfuycHS-2LYigg1BP-rN9jiW7hUlQpZ7rP70K4Pzn-LdQLNqrSf7QOhnvb7KjbNIsryXcJvyztqwnWU8NSnBHtDfK5SXx_v8aIpNGTPj4m1XS4CU1jr6NlgpjEdCIFcrUXvpLC2g_ETzMxQ8V3eWk76Kjj7Nw7r0cbVZGlVlZvQ7QkqItf3I1FCUOtAYkppAlrPDV-pciLewULyqfP8dyQPNYwoFrZF7cg9rRRPsRZUGy7k5mR8FLW2E77ZS5qAB6u0uiE3YU6trggbWOonsi3S35gHuxFZNgXUeKzYA7mSTg1L3MCD_V_N79KXT5PDt4JX0RbAvdaMxhm9HkpZDzrQDFCalbnkofjPBPUdUZAPLw8-ZYunjBXSjYMA5Tqx0oX50I-zAJhWrsVoYbFlyut7exo24Ajf0FfMdPJ4EH2NKf6Tzsp-6sTU07xsoJ5sA--kxThgqZTGe0x_Vmdewfzd5RgBUXQzt4L7i5GD1XmVvIT08oUeecBHnNKUYd54DaCrJkfoi9lsFU2yxjxTUZrYG9xt1YmXyZUuKgOK2A8yj9JaM", // Use env variable in prod
          },
          body: JSON.stringify({ email, groups: ["152489922138212041"] }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Thanks for signing up! Check your inbox.");
        setEmail("");
      } else {
        setStatus(`Error: ${data.error || "Something went wrong."}`);
      }
    } catch {
      setStatus("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" pb-30">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 sm:text-xl dark:text-gray-400">
            Get the latest on upcoming clean-up days, new DIY skatepark efforts,
            and ways you can help — sign up to stay in the loop.
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <div className="relative w-full sm:max-w-xs">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                  className="block w-full pl-10 pr-4 py-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </div>

            {status && (
              <div className="mb-4 text-sm text-green-500 dark:text-green-400">
                {status}
              </div>
            )}

            <div className="text-sm text-gray-500 dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a href="#" className="font-medium text-teal-500 hover:underline">
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSignUp;
