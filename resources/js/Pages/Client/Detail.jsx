import Navbar from '@/Components/Navbar/Navbar'
import { usePage, useForm } from "@inertiajs/react";
import axios from "axios";
import { useRef, useState } from "react";


export default function () {

    const { props } = usePage(); 
    const { auth } = usePage().props
    const { destination, isBookmark, get2Destination, comments : initialComments } = props;
    const images = JSON.parse(destination.images)



    // HANDLE ADD BOOKMARK 

    const [isAdded, setIsAdded] = useState(false);
    const currentURL = window.location.href;
    const baseUrl = window.location.host;

    const handleAddBookmark = async () => {
        try {
            await axios
                .post(`${currentURL}/bookmark`)
                .then((res) => {
                    setIsAdded(true);
                })
                .catch((res) => {
                    console.error(res.response.data);
                });
        } catch (err) {
            console.error(err);
        }
    };

    // HANDLE ADD KOMENTAR 
    const [comments, setComments] = useState(initialComments);

    const comment = useForm({
        body: "",
    });


    const submit = async (e) => {
        e.preventDefault();

        await axios.post(`${currentURL}`, {
            body: comment.data.body
        })
        .then((res) => {
            const { data } = res 
            setComments((prevComments) => [data.data, ...prevComments]);

            comment.reset("body")
        })
        .catch((res) => {
            console.error(res.response.data);
        });
       
    };
    
    
    // HANDLE DELETE KOMENTAR 
    const handleDeleteComment = async (id) => {


        if(!confirm("Apakah anda yakin ingin menghapus komentar?")){
            return false
        }
        
        await axios.delete(`/detail/${id}`)
        .then((res) => {
            window.location.reload()

        })
        .catch((res) => {
            console.error(res.response.data);
        });
       
    };
    



    return (
        <>
            <Navbar/>

            <header className="header bg-slate-500 h-[300px] w-full overflow- relative z-10">
                <img src={destination.thumbnail} alt="" className='object-cover h-[300px] w-full' />
                <div className="flex justify-center w-full z-10">
                    <div className="w-[80%] h-[80px] bg-white shadow rounded-md absolute bottom-[-40px] border">
                        <div className="flex justify-around items-center h-full">
                            <div className="text-center">
                                <h1 className='text-sm'>Provinsi</h1>
                                <h1 className='font-bold capitalize'>{destination.province.name}</h1>
                            </div>
                            <div className="text-center lg:block md:block hidden">
                                <h1 className='text-sm'>Operatioanal</h1>
                                <h1 className='font-bold'>{destination.operational}</h1>
                            </div>
                            <div className="text-center lg:block md:block hidden">
                                <h1 className='text-sm'>Dibuat</h1>
                                <h1 className="font-bold">
                                {new Date(destination.created_at).toLocaleDateString("id-ID", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                                </h1>
                            </div>
                            <div className="text-center">
                                <h1 className='text-sm'>Bookmark</h1>


                           {auth.user ? (
                                isBookmark ? (
                                    <p className="text-xs text-orange-500">Telah ditambahkan</p>
                                ) : (
                                    !isAdded ? (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleAddBookmark();
                                            }}
                                            className="font-semibold text-sm px-4 text-orange-500"
                                        >
                                            Tambah +
                                        </button>
                                    ) : (
                                        <p className="text-xs text-orange-500">Telah ditambahkan</p>
                                    )
                                )
                            ) : (
                                <p className="text-xs text-orange-500">Silahkan Login</p>
                            )}




                            </div>
                        </div>
                    </div>
                </div>
            </header>
      
            <div className='my-20 lg:mx-[4rem] mx-4'>
                <div className="grid lg:grid-cols-[8fr,4fr] grid-cols-1 gap-10">
                    <div className="lg:order-0 order-1">
                        <h1 className="lg:text-[60px] text-[36px] font-semibold leading-[1] mb-2">{destination.name} </h1>
                        <p className='font-semibold lg:text-xl text-md mb-5 text-slate-500 leading-[1.2]'>{destination.tagline} </p>
                        <div className="">
                            <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: destination.body }}></p>
                        </div>

                        {/* DETAIL DESTINATION  */}
                        <div className="mt-10">
                            {destination.destination_detail?.map((detail, index) => (
                                <div className="my-8" key={detail.id}>
                                    <h1 className='font-semibold text-xl text-slate-700 mb-4 capitalize'>{detail.name}</h1>
                                    <img src={detail.thumbnail} alt="detail img" className='w-[400px]' />
                                    <p className='mt-7 text-slate-600'>{detail.description}</p>
                                </div>
                            ))}
                         
                        </div>
                        {/*  END DETAIL  */}

                    </div>
                    <div className="lg:order-1 order-0">
                        <h1 className='font-semibold text-xl text-slate-700 mb-4'>Sejarah Singkat</h1>
                        <div className="">
                            <p className='text-sm text-slate-600'>{destination.short_history}</p>
                        </div>
                        <hr className='mt-5'/>

                    </div>
                </div>
                <div className="images my-10">
                    <h1 className='font-semibold text-xl text-slate-700 mb-4'>Gambar Terkait</h1>
                    <div className="flex gap-5 overflow-auto">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-[230px] h-[230px] object-cover"
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-20">
                    <div className="grid lg:grid-cols-[8fr,4fr] grid-cols-1 gap-10">
                        <div className="comment-wrapper">
                            <div className="">
                                <h1 className='font-semibold text-xl text-slate-700 mb-7'>Komentar</h1>
                                {auth.user ? (
                                    <form 
                                    action="POST"
                                    onSubmit={submit}
                                    >
                                        <textarea className='border rounded-lg text-slate-600 w-full h-[80px] focus:outline-none py-3 px-5 bg-slate-100'
                                        value={comment.data.body}
                                        onChange={(e) =>
                                            comment.setData("body", e.target.value)
                                        }
                                        ></textarea>
                                        <div className="text-end">
                                            <button disabled={comment.processing} className='bg-slate-500 text-white px-5 py-2 rounded-md mt-3 text-xs'>Submit</button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center">
                                        <h1 className='text-slate-500 text-sm tracking-wide'>Silahkan <a href="/auth/login" className='text-orange-500'>Masuk</a> Terlebih Dahulu</h1>
                                    </div>
                                )}
                            </div>

                            <hr className='my-5'/>
                            <div className="content">

                            {comments.map((comment, index) => (
                                <div key={index} className="flex gap-4 my-9">
                                    <img 
                                        src="https://i.ibb.co.com/crVZ11R/New-Project-38-D479-A6-E.webp" 
                                        alt="image" 
                                        className='object-cover lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] rounded-full'
                                    />
                                    <div>
                                        <h1 className='font-semibold text-slate-600 capitalize'>{comment.user.name}</h1>
                                        <p className='text-xs tracking-wide text-slate-500'>{comment.body}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <p className='text-xs text-slate-500'>
                                                {new Date(comment.created_at).toLocaleDateString("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </p>
                                            {auth.user && auth.user.id === comment.user.id && (
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    handleDeleteComment(comment.id)
                                                }} className="text-xs ms-5">
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" 
                                                        width="15" 
                                                        height="15" 
                                                        viewBox="0 0 24 24"  
                                                        fill="none"  
                                                        stroke="currentColor" 
                                                        strokeWidth="1.25" 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        className="lucide lucide-trash-2"
                                                    >
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                        <line x1="10" x2="10" y1="11" y2="17" />
                                                        <line x1="14" x2="14" y1="11" y2="17" />
                                                    </svg>
                                                </button>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            ))}


                            </div>
                        </div>
                        
                        <div className="recomend lg:block hidden">
                            <h1 className='font-semibold text-xl text-slate-700 mb-7'>Tempat Lainnya</h1>
                                {get2Destination.map((destination, index) => (
                                    <a href={`/detail/`+destination.slug} key={index} className="block mb-6">
                                        <img 
                                            src={destination.thumbnail} 
                                            alt={destination.name} 
                                            className="w-full object-cover h-[160px]" 
                                        />
                                        <p className="text-md text-center font-semibold text-slate-600 mt-2 leading-[1.2]">
                                            {destination.name}
                                        </p>
                                        <hr className="my-3" />
                                    </a>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
