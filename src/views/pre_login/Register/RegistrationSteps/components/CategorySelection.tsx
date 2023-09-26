import React from "react";

// icons
import { ReactComponent as BookIcon } from "../../../../../assets/icons/icon-book.svg";
import { ReactComponent as AwardIcon } from "../../../../../assets/icons/icon-award.svg";
import { ReactComponent as GraduationCapIcon } from "../../../../../assets/icons/icon-graduation-cap.svg";
import { ReactComponent as BriefcaseIcon } from "../../../../../assets/icons/icon-briefcase.svg";

// components
import CategoryCard from "../../../../../components/Cards/CategoryCard/CategoryCard";

const CategorySelection = () => {
  return (
    <div className="category-section  mb-5">
      <div className="row g-4">
        <div className="col-6 col-lg-3">
          <CategoryCard
            cardTitle="Material"
            cardDesc="Over 80 books for improvement/ studies"
            selected={true}
            icon={<BookIcon />}
          />
        </div>
        <div className="col-6 col-lg-3">
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
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
