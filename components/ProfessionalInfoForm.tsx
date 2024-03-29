import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

// Adaptation de la définition de type FormItems pour inclure les nouvelles propriétés
type ProfessionalInfoProps = {
  profession: string;
  position: string;
  sector: string;
  employmentType: string;
  updateForm: (fieldToUpdate: Partial<ProfessionalInfoProps>) => void;
  errors: Partial<ProfessionalInfoProps>;
};

const ProfessionalInfoForm = ({
  profession,
  position,
  sector,
  employmentType,
  errors,
  updateForm,
}: ProfessionalInfoProps) => {
  return (
    <FormWrapper
      title="Professional Information"
      description="Please provide your professional details."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="profession">Profession</Label>
          <Input
            type="text"
            name="profession"
            id="profession"
            placeholder="e.g. Software Developer"
            value={profession}
            onChange={(e) => updateForm({ profession: e.target.value })}
            required
          />
          {errors.profession && <p className="text-red-500 text-sm">{errors.profession}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="position">Position</Label>
          <Input
            type="text"
            name="position"
            id="position"
            placeholder="e.g. Senior Engineer"
            value={position}
            onChange={(e) => updateForm({ position: e.target.value })}
            required
          />
          {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="sector">Secteur</Label>
          <Input
            type="text"
            name="sector"
            id="sector"
            placeholder="e.g. Information Technology"
            value={sector}
            onChange={(e) => updateForm({ sector: e.target.value })}
            required
          />
          {errors.sector && <p className="text-red-500 text-sm">{errors.sector}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="employmentType">Status</Label>
          <Select
            name="employmentType"
            id="employmentType"
            value={employmentType}
            onChange={(e) => updateForm({ employmentType: e.target.value })}
            required
          >
            <option value="">Type Employé ou Entreprise ?</option>
            <option value="salaried">Salarié</option>
            <option value="executive">Dirigeant</option>
            <option value="freelance">Freelance</option>
            <option value="retired">Retraite</option>
          </Select>
          {errors.employmentType && <p className="text-red-500 text-sm">{errors.employmentType}</p>}
        </div>
      </div>
    </FormWrapper>
  );
};

export default ProfessionalInfoForm;
