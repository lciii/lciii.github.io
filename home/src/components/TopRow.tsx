import { Link } from '@mui/material';
import { Row } from '../shared/Row';

export const TopRow = () => {
    return <Row justifyContent="space-between">
        <Link href='mailto:luiscamachoiii@gmail.com' underline='none'>luiscamachoiii@gmail.com</Link>
        <Row> Resume, pubs</Row>
    </Row >
}