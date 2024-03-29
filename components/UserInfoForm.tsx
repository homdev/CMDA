import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItems } from "../app/page";

// Assuming you've added 'firstname' in the FormItems type definition
type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  errors: Partial<FormItems>;
};

const UserInfoForm = ({
  name,
  firstname, // Added firstname to the props destructuring
  email,
  phone,
  errors,
  updateForm,
}: StepProps) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstname">First Name</Label> {/* Added Label for firstname */}
          <Input
            autoFocus
            type="text"
            name="firstname"
            id="firstname"
            placeholder="e.g. John"
            value={firstname} 
            onChange={(e) => updateForm({ firstname: e.target.value })}
            className="w-full"
            required
          />
          {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>} {/* Display firstname errors */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Last Name</Label> {/* Updated Label for name */}
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Doe"
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className="w-full"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="e.g. johndoe@example.com"
            value={email}
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;
