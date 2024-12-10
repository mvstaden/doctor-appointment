import { fr_assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={fr_assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Center Section */}
        <div>
          <h3 className="text-xl font-medium mb-5">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <h3 className="text-xl font-medium mb-5 uppercase">Get in Touch</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>Example@example.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 - All Right Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
