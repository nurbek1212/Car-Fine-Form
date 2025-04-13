import { ChangeEvent, FormEvent, useState } from "react"
function Form() {
    let [FormData, setFormData] = useState({
        firstname: '',
        secondname: '',
        run: '',
        max_km: '',
        url: '',
        ypx: '',
    })

    function handle(e: ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }
    function handleForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('Sumbit')

    }
    return (
        <div className="container">
            <form className=" mx-auto p-2" action="" onSubmit={handleForm}>
                <h1 className="pt-5">Avtomobil Jarim Formasi</h1>

                <div className="py-2">
                    <label className="form-label"
                        htmlFor="firstname"
                    >Egasi (ism Familiyasi)</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control"
                        onChange={handle}
                        placeholder="Ali Karimov"
                    />
                </div>


                <div className="py-2">
                    <label className="form-label"
                        htmlFor="secondname"
                    >Avtomobil raqami</label>
                    <input
                        type="text"
                        id="secondname"
                        name="secondname"
                        className="form-control"
                        onChange={handle}
                        placeholder="01 A 123 BC"
                    />
                </div>


                <div className="py-2">
                    <label htmlFor="run"
                        className="form-label"
                    >Harakat tezligi (km / soat)</label>
                    <input
                        type="number"
                        id="run"
                        name="run"
                        className="form-control"
                        onChange={handle}
                        placeholder="85"
                    />
                </div>


                <div className="py-2">
                    <label htmlFor="max_km"
                        className="form-label"
                    >Ruxsat etilgan maksimal tezlik (km / soat)</label>
                    <input
                        type="number"
                        id="max_km"
                        name="max_km"
                        className="form-control"
                        onChange={handle}
                        placeholder="60"
                    />
                </div>


                <div className="py-2">
                    <label htmlFor="url"
                        className="form-label"
                    >Avtomobil surati (URL)</label>
                    <input
                        type="text"
                        id="url"
                        name="url"
                        className="form-control"
                        onChange={handle}
                        placeholder="https://..."
                    />
                </div>

                <div className="py-2">
                    <label htmlFor="ypx"
                        className="form-label"
                    >Qaror chiqaruvchi YPX xodimi (Ism Familiya)</label>
                    <input
                        type="text"
                        id="ypx"
                        name="ypx"
                        className="form-control"
                        onChange={handle}
                        placeholder="Sardor To`xtasinov"
                    />
                </div>
                <button className="btn btn-primary mt-3">Yuborish</button>
                <hr className="my-5" />
            </form>


            {/*  */}
            <div id="Jarima" className="container p-2 mb-3">
                <div className=" mx-auto">
                    <h4>✅Avtomatik yaratilgan jarima blankasi:</h4>
                    <div className="bg-light border rounded p-3">
                    <h3 className="text-center py-2">Hurmatli {FormData.firstname == '' &&  <b>Polonkasov Polonkas</b> || <b>{FormData.firstname}</b>}</h3>
                        <div className="row g-3">
                            <div className="col-lg-8">
                                <p>Sizga tegishli bo`lgan {FormData.secondname == '' && <b>[Avtomobil raqami]</b> || <b>{FormData.secondname}</b>} rusumli avtomobil <b>{FormData.run == '' && <b>[Tezlik]</b> || <b>{FormData.run}</b>}</b> texlik tezlikda harakatlanib,</p>
                                <p>belgilangan tezlik {FormData.max_km == '' && <b>[Ruxsat etilgan]</b> || <b>{FormData.max_km}</b>} km/soatni oshirgan.</p>
                                <p>Ushbu holat bo`yicha sizga jarima qo`llanildi</p>
                            </div>
                            <div className="col-lg-4">
                                {FormData.url == '' && <b>[Avtomobil surati mavjud emas]</b> || <img className="img-thumbnail m-1 " src={FormData.url} alt="" />}
                            </div>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque ex, optio suscipit eos dolorum laboriosam consequatur dolor temporibus vitae veniam, sed voluptatibus et qui. Deleniti delectus ad voluptates porro voluptate veniam necessitatibus dignissimos corporis vel aspernatur. Veritatis provident adipisci voluptates! Dolores mollitia doloribus non a aperiam? Quae maiores, deserunt vitae voluptas rem minima accusamus repellendus a hic voluptates quo corrupti nam iure error. Dolore quaerat dolorum quas maiores nobis. Provident reprehenderit commodi repellat veritatis ea qui dicta, voluptate assumenda dolore alias. Et temporibus optio rem earum deleniti officia consectetur aperiam velit atque alias, accusantium architecto doloremque libero magnam magni. Rerum aut quibusdam alias et, quae inventore! Quasi, eaque soluta qui animi molestias quas deleniti! Minima dolor, facere qui corrupti vel iste fuga. Distinctio commodi illo voluptas? Delectus minus inventore itaque aliquid animi nesciunt nisi rem deserunt doloremque, fugit expedita voluptate totam. Rerum mollitia veniam obcaecati illum nemo rem quos.</p>
                            <p className="text-end">Qaror chiqaruvchi: {FormData.ypx == '' && <b>[YPX xodimi]</b> || <b>{FormData.ypx}</b>}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Form