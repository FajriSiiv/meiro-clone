import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-screen h-[84px] bg-[#0e0f0f] flex justify-between items-center px-8 text-white/95 max-w-[1500px] left-1/2 -translate-x-1/2 z-50">
      <p className="font-bold text-4xl">meiro</p>
      <div className="bg-[#171818] p-1 rounded-xl flex gap-x-2">
        <Button className="hover:bg-[#202222] rounded-xl">Features</Button>
        <Button className="hover:bg-[#202222] rounded-xl">Use case</Button>
        <Button className="hover:bg-[#202222] rounded-xl">Resource</Button>
        <Button className="hover:bg-[#202222] rounded-xl">Pricing</Button>
      </div>
      <div className="flex gap-x-3">
        <Button className="hover:bg-[#202222] bg-transparent py-6 px-5 rounded-2xl">
          Login
        </Button>
        <Button className="hover:bg-[#bfff47] bg-[#d5fe52] py-6 px-5 rounded-2xl text-primary">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
