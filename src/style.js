const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading1: "text-center font-inter text-3xl font-extrabold leading-tight lg:scale-[1] md:scale-[.8]",
    heading2: "font-inter font-semibold xs:text-[48px] text-[40px] text-[#f7f204] xs:leading-[76.8px] leading-[66.8px] w-full lg:scale-[1] md:scale-[.8]",
    paragraph: "bg-clip-text text-transparent bg-white bg-opacity-[.79]  font-inter text-[30px] font-semibold leading-tight lg:scale-[1] md:scale-[.8]",
    button: "font-inter font-semibold xs:text-[16px] md:text-[20px] lg:text-[24px] xs:leading-[76.8px] leading-[66.8px] w-full",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;