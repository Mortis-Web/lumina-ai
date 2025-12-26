import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import useInView from "@/app/providers/useInView";

const Grid = () => {
  // Ensure the ref type matches HTMLDivElement
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>} // cast to satisfy TS
      id="about"
      className="lg:pt-30 sm:pt-20 pt-15 mx-auto max-w-7xl"
    >
      <h1 className="heading">
        Turning ideas into <span className="text-purple">real experiences</span>
      </h1>

      <BentoGrid className="w-full pt-15">
        {gridItems.map((item) => (
          <BentoGridItem
            isInView={isInView}
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
