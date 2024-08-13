import Input from '../../ui/Input'
import Button from '../../../ui/Button'

export default function Password(){

    return(
        <div>
            <h4>Update Password</h4>
            <div>
                <div>
                    <label>New Password</label>
                    <Input type="text" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <Input type="text" />
                </div>
                <div>
                    <Button>Cancel</Button>
                    <Button>Update Password</Button>
                </div>
            </div>
        </div>
    );
}