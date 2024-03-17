import Navibar from "../components/navbar/index";

const Fade = () => {
  return (
    <div className="long-gradient min-h-[1000vh]">
      <Navibar />
      {/* Add more content here to utilize the scrollable area */}
      <div className="text-white p-10">
        <h1 className="text-3xl font-bold">Scroll Down</h1>
        <p className="mt-5">This page features a gradient that transitions through multiple colors from top to bottom.</p>
      </div>
    </div>
  );
};

export default Fade;
