import { Smartphone } from "lucide-react";
// Pastikan path ini sesuai dengan struktur folder Anda
import ctaImage from "@/assets/cta-mytsel.jpg";

const AppDownloadSection = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden" id="app-download">
            <div className="container px-6 mx-auto">
                <div className="rounded-3xl bg-gradient-to-br from-[#FF0025] to-[#800012] overflow-hidden shadow-2xl relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        {/* Left Content */}
                        <div className="p-6 pt-10 pb-0 md:p-16 text-white text-center md:text-left">
                            <h2 className="font-heebo text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Ramadan Penuh Makna, <br />
                                <span className="text-white/90">di MyTelkomsel</span>
                            </h2>
                            <p className="font-garamond text-lg md:text-xl text-white/80 mb-6 max-w-md mx-auto md:mx-0">
                                Dapatkan kemudahan akses layanan Telkomsel dan beragam konten spesial Ramadan dalam satu genggaman.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                {/* Google Play Button */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm&hl=in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-all hover:scale-105 border border-white/10"
                                >
                                    <Smartphone className="w-8 h-8" />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold tracking-wider">Get it on</div>
                                        <div className="text-lg font-bold leading-none">Google Play</div>
                                    </div>
                                </a>

                                {/* App Store Button */}
                                <a
                                    href="https://apps.apple.com/id/app/mytelkomsel/id651412430"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all hover:scale-105"
                                >
                                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold tracking-wider">Download on the</div>
                                        <div className="text-lg font-bold leading-none">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Content - Image Updated */}
                        <div className="relative h-full min-h-[300px] md:min-h-[400px] flex items-end justify-center md:justify-end overflow-hidden mt-[-20px] md:mt-0">
                            {/* Gambar dinaikkan dengan mengubah translate-y */}
                            <div className="relative z-10 w-[85%] md:w-[95%]translate-y-0 hover:translate-y-0 transition-transform duration-700">
                                <img
                                    src={ctaImage}
                                    alt="MyTelkomsel App Preview"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                /* Border hitam dan rounded-t-3xl dihapus sesuai request */
                                />
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;