import PropTypes from 'prop-types'
const BeneficiarItem = ({item}) => {
    const {pro, img} = item
    return (
        <div className='border w-[300px] py-3 bg-white rounded-md hover:shadow-md duration-200 hover:-translate-y-1'>
            <img className='w-full' src={img} alt="" />
            <p className='text-3xl text-center'>{pro}</p>
        </div>
    );
};
BeneficiarItem.propTypes = {
    item: PropTypes.object
}
export default BeneficiarItem;