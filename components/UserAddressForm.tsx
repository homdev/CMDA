import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select"; // Ajout si vous avez un composant Select pour les pays
import { FormItems } from "../app/page";

// En supposant que 'country', 'address', 'city', et 'postalCode' sont ajoutés à la définition de type FormItems
type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  errors: Partial<FormItems>;
};

const LocationInfoForm = ({
  country,
  address,
  city,
  zipCode,
  errors,
  updateForm,
}: StepProps) => {
  return (
    <FormWrapper
      title="Location Information"
      description="Please provide your country, address, city, and postal code."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="country">Country</Label>
          <Select
            name="country"
            id="country"
            value={country}
            onChange={(e) => updateForm({ country: e.target.value })}
            required
          >
            {/* Exemple d'options, à remplacer par vos propres options */}
            <option value="">Choisir un pays</option>
            <option value="US">Algérie</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="MX">Mexico</option>
            <option value="FR">France</option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="DE">Germany</option>
            <option value="JP">Japan</option>
            <option value="CN">China</option>
            <option value="IN">India</option>
            <option value="BR">Brazil</option>
            <option value="RU">Russia</option>
            <option value="NG">Nigeria</option>
            <option value="ZA">South Africa</option>
          </Select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="e.g. 123 Main St"
            value={address}
            onChange={(e) => updateForm({ address: e.target.value })}
            required
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="e.g. New York"
            value={city}
            onChange={(e) => updateForm({ city: e.target.value })}
            required
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="zipCode">Postal Code</Label>
          <Input
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="e.g. 10001"
            value={zipCode}
            onChange={(e) => updateForm({ zipCode: e.target.value })}
            required
          />
          {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
        </div>
      </div>
    </FormWrapper>
  );
};

export default LocationInfoForm;
