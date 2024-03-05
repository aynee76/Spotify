import './HeroPage.css'
import { Button } from './Button'

export const HeroPage = () => {
    return (
        <div className="wrapper">
            <h1>Get Premium free for 1 month</h1>
            <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>

            <div className="btn">
                <Button className={'whitebg'}>GET STARTED</Button>
                <Button className={'blackbg'}>SEE OTHER PLANS</Button>
            </div>

            <p><a href='#blank' className='term'>Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
        </div>
    )
}