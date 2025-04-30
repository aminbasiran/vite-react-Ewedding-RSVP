import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




// Match the schema shape with the form inputs
type Inputs = {
  name: string;
  wish?: string;
  attending: "yes" | "no";
};

// Validation schema
const schema: yup.ObjectSchema<Inputs> = yup.object({
  name: yup.string().required("Nama perlu diisi"),
  wish: yup.string().optional(),
  attending: yup
    .mixed<"yes" | "no">()
    .oneOf(["yes", "no"], "Sila pilih hadir atau tidak")
    .required("Kehadiran perlu diisi"),
});


const RSVP = () => {

    const { register, handleSubmit, formState: { errors }, reset} = useForm<Inputs>({
        resolver: yupResolver(schema),
      });
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        reset()

    };
    
  return (
    //   <div className='w-full h-screen flex flex-col justify-evenly items-center-safe p-4 bg-cover' style={{ backgroundImage: `url(${textured})` }}>
      <div className='w-full h-screen flex flex-col justify-evenly items-center-safe p-4'>
          <div className="flex flex-col justify-center-safe items-center-safe text-center gap-2">
            <h1 className="text-7xl font-bold tracking-tighter pb-10">RSVP</h1>
                
            <div className="flex flex-row justify-center-safe items-center-safe font-Gwendolyn text-5xl gap-2  font-[700]">
                <h1>Mirza</h1>
                    {/* <img src="./images/roses.png" alt="rose" className="w-30 aspect-square"/> */}
                    <h3>+</h3>
                <h1>Hasya</h1>
            </div>
          
            <h2 className="text-center opacity-40 text-xs">* Sila RSVP sebelum 30 November 2025</h2>
          </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4">
                <div className="flex flex-col justify-center-safe items-center-safe"> 
                    <input
                    placeholder="Nama:"
                    {...register("name")}
                    className="py-4 px-2 text-xs rounded-sm bg-transparent text-center focus:outline-none focus:ring-0 focus:border-none"
                    />
                    {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                </div>
              
                <div className="flex flex-col justify-center-safe items-center-safe">
                    <textarea
                    placeholder="Ucapan:"
                    {...register("wish")}
                    className="text-xs px-2 py-4 bg-transparentrounded-sm resize-none h-24 text-center focus:outline-none focus:ring-0 focus:border-none"
                    />
                </div>
                <div className="flex flex-col justify-center-safe items-center-safe">
                    <select id="attending" {...register("attending")} className="text-xs focus:outline-none focus:ring-0 focus:border-none">
                        <option value="">Kehadiran</option>
                        <option value="yes">Hadir</option>
                        <option value="no">Tidak hadir</option>
                    </select>
                    {errors.attending && <span className="text-xs text-red-400">{errors.attending.message}</span>}
                </div>

                <button type="submit" className="bg-secondary text-white p-2 rounded hover:font-bold">
                Rsvp!
                </button>
            </form>
    </div>
  )
}

export default RSVP