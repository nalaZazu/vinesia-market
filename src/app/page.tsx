// "use client";
import Available from "@/components/available/page";
import Banner from "@/components/banner/page";
import Critics from "@/components/critics/page";
import Heritage from "@/components/heritage/page";
import Listing from "@/components/winelisting/page";
import { getHomePage } from "../services/Home";
import Popup from "@/components/popup/page";
import ExploreRegion from "@/components/exploreRegion/page";
import UpperFooter from "@/components/upperfooter/page";

export default async function Home() {
  // const [criticsSelection, setCriticsSelection] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [drops, setDrops] = useState([]);
  // useEffect(() => {
  //   getHomePage().then((res) => {
  //     console.log("Response From APi Home Api", res?.data);
  //     // setProducts(res?.data?.products);
  //     // setCriticsSelection(res?.data?.selection);
  //     // setDrops(res?.data?.drops);
  //   });
  // }, []);
  const data = await getHomePage();

  // const {
  //   isLoading: filtersLoading,
  //   error: filtersError,
  //   data,
  // } = useQuery({signature
  //   queryKey: ["getHomePage"],
  //   queryFn: getHomePage,
  // });

  let products = data?.data?.products;
  let criticsSelection = data?.data?.selection;
  let drops = data?.data?.drops;

  return (
    <>
      <div className="container mx-auto px-4  sm:px-6  lg:px-8">
        {/* py-16 sm:py-24 */}
        <Banner />
        <Heritage data={products} />
        <Available data={drops} />
        <Critics data={criticsSelection} />
        {products && <Listing data={products} />}
        <ExploreRegion />
        <Popup open={false} setOpen={false} />
      </div>
      <UpperFooter />
    </>
  );
}