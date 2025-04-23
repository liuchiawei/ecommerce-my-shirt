import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import NavToolSet from '@/components/NavToolSet'
export default function DeskNav() {
  return (
    <div className='flex justify-between items-center w-full h-full'>
      <NavigationMenu className='w-full h-full **:cursor-pointer'>
        <NavigationMenuList className='**:data-item:font-bold **:data-item:text-md **:data-item:hover:text-cyan-500 **:data-item:transition-all **:data-item:duration-200 **:data-item:after:content-[attr(data-jp)] **:data-item:after:flex **:data-item:after:items-center **:data-item:after:justify-center **:data-item:after:absolute **:data-item:after:top-0 **:data-item:after:left-0 **:data-item:after:w-full **:data-item:after:h-full **:data-item:after:rounded-sm **:data-item:after:bg-popover **:data-item:after:opacity-0 **:data-item:after:transition-all **:data-item:after:duration-200 **:data-item:after:ease-in-out **:data-item:after:z-10 **:data-item:hover:after:opacity-100'>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" data-item data-jp="ホーム">home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-item data-jp="アバウト" className='relative'>about</NavigationMenuTrigger>
            <NavigationMenuContent className='mt-2 shadow-xl rounded-sm bg-popover text-popover-foreground *:font-bold'>
              <NavigationMenuLink href="#">about</NavigationMenuLink>
              <NavigationMenuLink href="#">history</NavigationMenuLink>
              <NavigationMenuLink href="#">philosophy</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-item data-jp="ショップ">online shop</NavigationMenuTrigger>
            <NavigationMenuContent className='mt-2 shadow-xl rounded-sm bg-popover text-popover-foreground *:font-bold'>
              <NavigationMenuLink href="#">cloth</NavigationMenuLink>
              <NavigationMenuLink href="#">accessory</NavigationMenuLink>
              <NavigationMenuLink href="#">other</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" data-item data-jp="メール">contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavToolSet />
    </div>
  )
}