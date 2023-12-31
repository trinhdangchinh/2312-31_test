import { create } from "zustand";
const useZustandStore = create((set) => ({
  dialogShow: {
    showState: false,
    timesShow: 0,
    FormAndInfoShow: true,
    succeedShow: false,
    loading: false,
  },
  modalBg: false,
  setModalBg: () =>
    set((state) => ({
      modalBg: !state.modalBg,
    })),
  setDialogShow: (control = "") =>
    set((state) => ({
      dialogShow: {
        ...state.dialogShow,
        showState: control ? control : !state.dialogShow.showState,
        timesShow: state.dialogShow.timesShow + 1,
      },
    })),
  setDialogShow1time: () =>
    set((state) => ({
      dialogShow: { ...state.dialogShow, timesShow: 1, showState: true },
    })),
  setFormAndInfoShow: () =>
    set((state) => ({
      dialogShow: {
        ...state.dialogShow,
        FormAndInfoShow: !state.dialogShow.FormAndInfoShow,
      },
    })),
  setsucceedShow: (control = "") =>
    set((state) => ({
      dialogShow: {
        ...state.dialogShow,
        succeedShow: control ? control : !state.dialogShow.succeedShow,
      },
    })),
  setLoading: () =>
    set((state) => ({
      dialogShow: {
        ...state.dialogShow,
        loading: !state.dialogShow.loading,
      },
    })),
  //   removeAllBears: () => set({ bears: 0 }),
}));

export default useZustandStore;

// use this state in any component
// const dialogShow = useZustandStore((state) => state.dialogShow);

//use this function to trigger any where
//   const setDialogShow = useZustandStore((state) => state.setDialogShow);
