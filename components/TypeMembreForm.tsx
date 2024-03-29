import React from 'react';
import { FormItems } from "@/app/page";
import FormWrapper from "./FormWrapper";

// Supposons que ce soit vos nouveaux types de données pour les membres
const memberTypes = [
  { id: 1, type: "projectHolder" as const, title: "Porteur de projet", description: "Lancez vos propres projets.", iconName: "rocket" },
  { id: 2, type: "contributor" as const, title: "Contributeur", description: "Contribuez à des projets existants.", iconName: "hand-holding-heart" },
  { id: 3, type: "investor" as const, title: "Investisseur", description: "Investissez dans des projets prometteurs.", iconName: "wallet" },
];

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const MemberTypeForm = ({ memberType, updateForm }: StepProps) => {
  function handleRadioChange(selectedTypeId: number) {
    const selectedType = memberTypes.find(type => type.id === selectedTypeId)?.type;
    // Si selectedType est undefined (par exemple, si find ne retourne pas de résultat), ne pas appeler updateForm
    if (selectedType) {
      updateForm({ memberType: selectedType });
    }
  }

  return (
    <FormWrapper
      title="Choose your member type"
      description="Select the type that best describes you."
    >
      <div className="flex flex-col gap-3">
        {memberTypes.map((type) => (
          <div
            className={`border border-neutral-600 flex items-center gap-3 p-3 rounded-md ${
              memberType === type.type ? "border-[#77f6aa] bg-neutral-900" : ""
            } focus:border-[#77f6aa] outline-none hover:border-[#77f6aa] md:gap-5 md:p-5`}
            key={type.id}
          >
            <input
              type="radio"
              name="memberType"
              id={`member-type-${type.id}`}
              checked={memberType === type.type}
              onChange={() => handleRadioChange(type.id)}
              className="accent-[#77f6aa] h-4 w-4 border-gray-300"
            />
            <label htmlFor={`member-type-${type.id}`} className="w-full flex items-center justify-between text-white font-semibold">
              <div className="flex flex-col">
                <span>{type.title}</span>
                <span className="text-sm">{type.description}</span>
              </div>
              {/* Remplacez cette partie par le rendu de votre icône basée sur type.iconName */}
              <i className={`icon-${type.iconName} text-[#77f6aa]`}></i>
            </label>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default MemberTypeForm;
