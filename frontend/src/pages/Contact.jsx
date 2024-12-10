import { fr_assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <h2 className="uppercase">
          Contact <span className="text-gray-700 font-medium">Us</span>
        </h2>
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={fr_assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <h3 className="text-lg text-gray-600 font-semibold">Our Office</h3>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555‑0132 <br />
            greatstackdev@gmail.com
          </p>
          <h3 className="text-lg font-semibold text-gray-600">
            Careers at PRESCRIPTO
          </h3>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
