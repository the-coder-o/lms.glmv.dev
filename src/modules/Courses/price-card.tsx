import { Button } from '@/components/ui/button'

export default function PriceCard() {
  return (
    <section className="mt-3 bg-background">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="w-full rounded-sm border bg-card px-6 py-4 shadow-lg max-md:px-4 max-md:py-2">
          <img
            src="https://optim.tildacdn.one/tild3632-3936-4464-b835-326266303963/-/resize/279x/-/format/webp/image_7.png"
            alt="Boshlang'ich"
            width={'100%'}
            height={200}
            className="rounded-md object-cover"
            style={{ aspectRatio: '300/200', objectFit: 'cover' }}
          />
          <div className="mb-6 space-y-2">
            <h3 className="text-2xl font-bold">Boshlang'ich</h3>
            <p className="text-muted-foreground">Shaxslar va kichik jamoalar uchun mukammal.</p>
          </div>
          <div className="mb-8 flex items-baseline space-x-2">
            <span className="text-4xl font-bold">590,000 so'm</span>
            <span className="text-muted-foreground">/oy</span>
          </div>
          <div className="space-y-2">
            <p>- Qo'llanma Materiallar</p>
            <p>- 1,5 Oy Kurs uchun Dostup</p>
            <p>- 8 Ta darslik (B2B va murakkab Sotuv texnikalari)</p>
            <p>- Qo'shimcha 2ta Bonus Kurs</p>
            <p className="line-through">( 4 ta darslik: B2B da sotuv bo'limini tizimlashtirish,</p>
            <p className="line-through">
              6 ta darslik: Sotuv bo'limini to'g'ri tashkil qilish va boshqarish )
            </p>
            <p className="line-through">- Yopiq Guruhga dostup</p>
            <p className="line-through">- Online Networking</p>
            <p className="line-through">- Online Sertifikat</p>
            <p className="line-through">- Online kurator</p>
            <p className="line-through">- Quiz Testlar</p>
          </div>
          <Button variant="outline" className="mt-4 w-full">
            Hozir Sotib Olish
          </Button>
        </div>
        <div className="w-full rounded-sm border bg-card p-6 shadow-lg">
          <img
            src="https://optim.tildacdn.one/tild6262-3133-4066-a235-646366323339/-/resize/318x/-/format/webp/Group_8.png"
            alt="Boshlang'ich"
            width={'100%'}
            height={200}
            className="rounded-md object-cover"
            style={{ aspectRatio: '300/200', objectFit: 'cover' }}
          />
          <div className="mb-6 space-y-2">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-muted-foreground">
              O'sib borayotgan jamoalar va bizneslar uchun ideal.
            </p>
          </div>
          <div className="mb-8 flex items-baseline space-x-2">
            <span className="text-4xl font-bold">690,000 so'm</span>
            <span className="text-muted-foreground">/oy</span>
          </div>
          <div className="space-y-2">
            <p>- Qo'llanma Materiallar</p>
            <p>- 1,5 Oy Kurs uchun Dostup</p>
            <p>- 8 Ta darslik (B2B va murakkab Sotuv texnikalari)</p>
            <p>- Qo'shimcha 2ta Bonus Kurs</p>
            <p>( 4 ta darslik: B2B da sotuv bo'limini tizimlashtirish,</p>
            <p>6 ta darslik: Sotuv bo'limini to'g'ri tashkil qilish va boshqarish )</p>
            <p>- Yopiq Guruhga dostup</p>
            <p className="line-through">- Online Networking</p>
            <p className="line-through">- Online Sertifikat</p>
            <p className="line-through">- Online kurator</p>
            <p className="line-through">- Quiz Testlar</p>
          </div>
          <Button variant="outline" className="mt-4 w-full">
            Hozir Sotib Olish
          </Button>
        </div>
        <div className="w-full rounded-sm border bg-card p-6 shadow-lg">
          <img
            src="https://optim.tildacdn.one/tild3266-3938-4732-b764-343438353634/-/resize/348x/-/format/webp/Group_9.png"
            alt="Boshlang'ich"
            width={'100%'}
            height={200}
            className="rounded-md object-cover"
            style={{ aspectRatio: '300/200', objectFit: 'cover' }}
          />
          <div className="mb-6 space-y-2">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-muted-foreground">
              Katta tashkilotlar va jamoalar uchun moslashtirilgan.
            </p>
          </div>
          <div className="mb-8 flex items-baseline space-x-2">
            <span className="text-4xl font-bold">2.790,000 so'm</span>
            <span className="text-muted-foreground">/oy</span>
          </div>
          <div className="space-y-2">
            <p>- Qo'llanma Materiallar</p>
            <p>- 1,5 Oy Kurs uchun Dostup</p>
            <p>- 8 Ta darslik (B2B va murakkab Sotuv texnikalari)</p>
            <p>- Qo'shimcha 2ta Bonus Kurs</p>
            <p>( 4 ta darslik: B2B da sotuv bo'limini tizimlashtirish,</p>
            <p>6 ta darslik: Sotuv bo'limini to'g'ri tashkil qilish va boshqarish )</p>
            <p>- Yopiq Guruhga dostup</p>
            <p>- Online Networking</p>
            <p>- Online Sertifikat</p>
            <p>- Online kurator</p>
            <p>- Quiz Testlar</p>
          </div>
          <Button variant="outline" className="mt-4 w-full">
            Hozir Sotib Olish
          </Button>
        </div>
      </div>
    </section>
  )
}
