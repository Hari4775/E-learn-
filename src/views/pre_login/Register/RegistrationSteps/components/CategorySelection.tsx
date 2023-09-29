import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useEffect,useState } from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";


// icons
import { ReactComponent as BookIcon } from "../../../../../assets/icons/icon-book.svg";
import { ReactComponent as AwardIcon } from "../../../../../assets/icons/icon-award.svg";
import { ReactComponent as GraduationCapIcon } from "../../../../../assets/icons/icon-graduation-cap.svg";
import { ReactComponent as BriefcaseIcon } from "../../../../../assets/icons/icon-briefcase.svg";
import {  useSelector,useDispatch } from "react-redux";
// components
import CategoryCard from "../../../../../components/Cards/CategoryCard/CategoryCard";
import { RootState } from "../../../../../redux/rootReducer";
import { getcourseCategory } from "../../../../../redux/pages/courseSlice";
import { useAppSelector } from "../../../../../redux/hooks";
import { registerFinish } from "../../../../../redux/pages/loginSlice";


interface Category {
  setIndex:(data:any)=>void;

}

const CategorySelection = forwardRef <any,Category> ((props,ref) => {
const{
    setIndex =()=>{}
  }= props;

const registerFinishRef = useRef<any>();
const navigate = useNavigate();
const dispatch=useDispatch<any>();
const [isSuccess,setIsSucess] = useState<boolean>(false);
const [categories, setCategories] = useState<any>([]);
const [selectedCategory, setSelectedCategory] = useState<any>("");

const courseCategories  = useAppSelector(
  (state: RootState)=> state.course.courseCategory
 );
const {handleSubmit,setValue, formState: {errors} } = useForm();

useImperativeHandle(ref, ()=>({
  onSaveFinishTrigger : ()=>{
    registerFinishRef ?.current ?.requestSubmit();
  }
})
);

useEffect(()=>{
  setCategories(courseCategories);
},[courseCategories]);

useEffect(()=>{
  if(isSuccess){
    navigate("/courses");
  }
}, [isSuccess,navigate]);


const onSubmit = async () => {
  if (selectedCategory) {
    try {
      dispatch(registerFinish({ program: selectedCategory }, setIndex));
      setIsSucess(true); // Set isSucess to true after dispatching the action
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  }
};

  return (
    <div className="category-section  mb-5">
    <form ref={registerFinishRef} onSubmit={handleSubmit(onSubmit)}>      

      <div className="row g-4">
      {categories?.map((category:any, key:any) => (
          <div key={key} className="col-6 col-lg-3">
            <CategoryCard
             category={category} 
             selecetdCategory={selectedCategory}
             setSelectedCategory={setSelectedCategory}
             setIndex={setIndex}
             /> 
          </div>
        ))}
 
        {/* <div className="col-6 col-lg-3">
          <CategoryCard
            cardTitle="Licentiate"
            cardDesc="Contain curated courses and materials for students after 10th grade"
            icon={<AwardIcon />}
          />
        </div>
        <div className="col-6 col-lg-3">
          <CategoryCard
            cardTitle="Associate"
            cardDesc="Contain curated courses and materials for College Students"
            icon={<GraduationCapIcon />}
          />
        </div>
        <div className="col-6 col-lg-3">
          <CategoryCard
            cardTitle="Fellowship"
            cardDesc="Contain curated courses and materials for PG students"
            icon={<BriefcaseIcon />}
          /> */}
        {/* </div> */}
      </div>
      </form>

    </div>
  );
}
);

export default CategorySelection;
