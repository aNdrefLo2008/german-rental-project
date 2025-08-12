/** @format */
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"

export function StickyBookingBar() {
  return (
    <div
      className='
      fixed bottom-4 left-1/2 transform -translate-x-1/2
      backdrop-blur
      shadow-lg
      rounded-full
      px-6 py-3
      flex items-center space-x-4 justify-center sm:mx-0 mx-0
      max-w-md w-full supports-[backdrop-filter]:bg-background/40'
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)"
      }}>
      <ShoppingCart
        className={`sm:block hidden text-gray-700`}
        style={{width: 24, height: 24, minWidth: 24, minHeight: 24}}
      />

      <span
        className={`font-medium text-sm sm:text-[16px] whitespace-nowrap text-gray-700`}>
        Special Offer 50% Off:
      </span>
      <Button
        asChild
        size='lg'
        variant='default'
        className={`whitespace-nowrap `}>
        <Link href='/apartments' target='_blank' rel='noopener noreferrer'>
          Jetzt buchen
        </Link>
      </Button>
    </div>
  )
}
