import profile from "./assets/profile.png";
import cover from "./assets/cover.png";
import QR from "./assets/QR_code.png";
import tiktok from "./assets/tiktok.svg";
import { Lang } from "./components/lang";
import Modal from "./components/Modal";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden relative">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={cover}
              alt="Almond Cakes & Coffee"
              className="  object-contain" // w-full h-52 object-cover
            />

            {/* Logo Box Positioned Over Image
             *   [transform-style:preserve-3d] transition-all duration-500 active:[transform:rotateY(180deg)]
             */}
            <div className="card  bg-white shadow-xl hover:my-rotate-y-180  rounded-2xl z-20 p-10 bottom-12 m-5">
              <div className="flex items-between gap-4 mb-4">
                <div className="avatar">
                  <div className="w-28 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
                    <img src={profile} alt="logo" />
                  </div>
                </div>
                <div className="justify-start w-full mr-40">
                  <div className="flex justify-end gap-4">
                    <Lang />
                    <Modal />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mt-4">
                  {t("home.title")} 
                </h2>
                <p className="text-[#666666] mt-0.5">{t("home.descr")}</p>
              </div>
              <div className="mt-5 flex justify-center gap-2 ml-10 mr-10">
                <a
                  href="tel:+972503898446"
                  className="btn  text-white w-44 rounded-xl flex justify-center"
                  style={{ backgroundColor: "#FF9B34" }}
                >
                  {t("home.button_call")}
                </a>
                <a
                  href="https://maps.app.goo.gl/WwREqQHBFMHaFoSAA"
                  className="btn  w-44 rounded-xl flex justify-center"
                  style={{ color: "#FF9B34" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 13.1623C21 12.1187 21 9.5969 20.7169 9.20407C20.4337 8.81124 19.9387 8.64624 18.9487 8.31623L18 8M21 16.829C21 18.1199 21 18.7653 20.6603 19.18C20.5449 19.3208 20.4048 19.4394 20.247 19.5301C19.7821 19.797 19.1455 19.6909 17.8721 19.4787C16.6157 19.2693 15.9875 19.1646 15.3648 19.2167C15.1463 19.235 14.9292 19.2676 14.715 19.3144C14.1046 19.4477 13.5299 19.735 12.3806 20.3097C10.8809 21.0596 10.131 21.4345 9.33284 21.5501C9.09242 21.5849 8.8498 21.6021 8.60688 21.6016C7.80035 21.6001 7.01186 21.3373 5.43488 20.8116L5.05132 20.6838C4.06129 20.3538 3.56627 20.1888 3.28314 19.7959C3 19.4031 3 18.8813 3 17.8377V17M3 12.908C3 11.2491 3 10.4197 3.48841 9.97358C3.57388 9.89552 3.66809 9.82762 3.76917 9.77122C4.28426 9.48384 4.96572 9.66128 6.22311 10.075"
                      stroke="#FF9B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17.25 11.2513C17.7356 10.0935 18 8.86093 18 7.70031C18 4.55211 15.3137 2 12 2C8.68629 2 6 4.55211 6 7.70031C6 10.8238 7.91499 14.4687 10.9028 15.7721C11.5993 16.076 12.4007 16.076 13.0972 15.7721C14.0514 15.3558 14.8963 14.7007 15.6042 13.9"
                      stroke="#FF9B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="12"
                      cy="8"
                      r="2"
                      stroke="#FF9B34"
                      stroke-width="1.5"
                    />
                  </svg>
                  {t("home.button_location")}
                </a>
              </div>
              <div className="mt-10 space-y-2">
                <a
                  href="https://www.facebook.com/genge.painting"
                  className="btn btn-outline w-full flex justify-center rounded-lg h-12"
                  style={{ borderColor: "#2D5360" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                  <span className="text-[#2D5360]">facebook</span>
                </a>

                <a
                  href="http://wa.me/+972503898446"
                  className="btn btn-outline w-full flex justify-center rounded-lg h-12"
                  style={{ borderColor: "#2D5360" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  <span className="text-[#2D5360]">WhatsApp</span>
                </a>

                <a
                  href="https://www.tiktok.com/@genge531?_t=ZS-8x1pE1jyAGl&_r=1"
                  className="btn btn-outline w-full flex justify-center rounded-lg h-12"
                  style={{ borderColor: "#2D5360" }}
                >
                  <img src={tiktok} alt="TikTok" className="w-5 h-5" />
                  <span className="text-[#2D5360]">Tik tok</span>
                </a>
              </div>
              {/**Back FACE */}
              {/**
              <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-white shadow-xl rounded-2xl p-5 flex flex-col items-center justify-center">
                <img
                  src={QR}
                  alt="QR Code"
                  className="w-60 h-60 mb-4 rounded-lg"
                />
              </div>
               */}
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-12 pb-6"></div>
        </div>
      </div>
    </>
  );
}

export default App;
