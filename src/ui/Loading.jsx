import { RotatingLines } from "react-loader-spinner";

function Loading({ width = "40", height = "40" }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <RotatingLines
        visible={true}
        height={height}
        width={width}
        color="rgb(var(--color-primary-900))"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
