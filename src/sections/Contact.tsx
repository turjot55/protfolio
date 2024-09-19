import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-10">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center z-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let&apos;s create something amazing together
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your next project to life? Let&apos;s connect
                  and discuss more about it in detail and let&apos;s get
                  started.
                </p>
              </div>
              <div>
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950">
                  <a href="mailto:turjo_t@yahoo.com?subject=Contact&body=Hello%20Turjo,%0D%0A">
                    <span className="font-semibold">Contact Me</span>
                  </a>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
