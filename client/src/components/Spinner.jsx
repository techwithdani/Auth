import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
  return (
    <>
      <BounceLoader
        cssOverride={override}
        size={45}
        color="#7480ff"
        aria-label="Loading Spinner"
      />
    </>
  );
};

export default Spinner;
