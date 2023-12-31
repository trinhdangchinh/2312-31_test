import useZustandStore from "../../app/storeZustand";

const Loading = () => {
  const dialogShow = useZustandStore((state) => state.dialogShow);
  return (
    <div
      className={
        "loading text-center " + (dialogShow.loading ? "hien" : "hidden")
      }
    >
      Đang giửi...
    </div>
  );
};
export default Loading;
