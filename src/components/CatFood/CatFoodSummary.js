import classes from './CatFoodSummary.module.css'

function CatFoodSummary(){
    return (
        <section className={classes.summary}>
            <h2 className ={classes.header}>Kedilerinize Özel, Kaliteli ve Taze Açık Mama</h2>
            <p>
                Hemen sipariş verin dilediğiniz kedi maması kapınıza gelsin.
                Fiyat, seçtiğiniz mama ve kg'a göre değişmektedir.
                Üstelik kargo bedava!
                Markalarımız : ND, Royal Canin, Proplan, Hills, Felicia
            </p>

            <p>
                Ürünlerimiz özenle sizler için paketlenmektedir. Tüm mamaların üzerinde içerik bilgisi ve 
                son kullanma tarihi bulunmaktadır. Tazelik garantilidir, beğenmezseniz koşulsuz şartsız iade edebilirsiniz. 
            </p>

        </section>
    )

}

export default CatFoodSummary;