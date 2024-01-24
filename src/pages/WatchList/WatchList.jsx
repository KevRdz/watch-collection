import WatchCard from "../../components/WatchCard/WatchCard"


function WatchList(props) {
  return (
    <>
      <h1>Watch List</h1>
      <div>
        {props.watches.map(watch => {
          <WatchCard key={watch._id} watch={watch}/>
        })}
      </div>
    </>
  )
}

export default WatchList