import { Input } from '@/components/ui/input';
import useRegistrationChoiceStore from '../../store';
import { useShallow } from 'zustand/react/shallow';

export default function PatientFinal() {
  const [ setFileUrl, fileUrl ] = useRegistrationChoiceStore(
    useShallow((state) => [
    state.setFileUrl,
    state.fileUrl
  ]));


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      
      const urlObj = window.URL.createObjectURL(selectedFile);
      setFileUrl(urlObj);
      console.log(fileUrl);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col flex-grow justify-center gap-4 pt-8">
        <div className="flex flex-col">
          <h6 className="font-normal">
            Providing medical history
          </h6>
          <h3 className="font-semibold">
            Can you provide any past records?
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <Input type="file" className="cursor-pointer" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
}