import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar'

const Dashboard = () => {
    return (
        <div>
           <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
    )
}

export default Dashboard;