import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { FaCheck } from "react-icons/fa6";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {
    const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCuisine = event.target.value;
        const isChecked = event.target.checked;
    
        const newCuisinesList = isChecked
          ? [...selectedCuisines, clickedCuisine]
          : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);
    
        onChange(newCuisinesList);
      };
    
      const handleCuisinesReset = () => onChange([]);
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter by cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {cuisineList
        .slice(0, isExpanded ? cuisineList.length : 6)
        .map((cuisine) => {
          const isSelected = selectedCuisines.includes(cuisine);
          return (
            <div className="flex">
              <input
                id={`cuisine_${cuisine}`}
                type="checkbox"
                className="hidden"
                value={cuisine}
                checked={isSelected}
                onChange={handleCuisinesChange}
              />
              <Label
                htmlFor={`cuisine_${cuisine}`}
                className={`flex flex-1 items-center cursor-pointer text-sm px-4 py-2 rounded-md font-medium ${
                  isSelected
                    ? "border border-green-600 text-green-600"
                    : "border border-slate-300"
                }`}
              >
                {isSelected && <FaCheck size={20} strokeWidth={3} />}
                {cuisine}
              </Label>
            </div>
          );
        })}
        <Button onClick={onExpandedClick} variant="link" className="mt-4 flex-1">
            {isExpanded ? (<span className="flex flex-row items-center">
                View less <IoChevronUp />
            </span>):(
                <span className="flex flex-row items-center">
                    View more <IoChevronDown />
                </span>
            )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
