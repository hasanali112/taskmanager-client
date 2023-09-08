import HashLoader from "react-spinners/HashLoader";




const Loading = () => {
   

    return (
        <div className="sweet-loading flex justify-center mt-40">
      <HashLoader
      color="#364dd6"
      size={100}
      />
    </div>
    );
};

export default Loading;