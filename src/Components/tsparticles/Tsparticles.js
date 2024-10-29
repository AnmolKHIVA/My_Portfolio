import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Tsparticles = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const options = {
        background: {
            color: {
                value: "#0e1630",
            },
        },
        fpsLimit: 120,
        particles: {
            color: {
                value: "#ffffff",
            },
            // links: {
            //     color: "#ffffff",
            //     distance: 150,
            //     enable: true,
            //     opacity: 0.5,
            //     width: 1,
            // },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 160,
            },
            opacity: {
                value: {min:0.1,max:0.2},
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 2, max: 3 },
            },
        },
        // detectRetina: true,
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
    );
};

export default Tsparticles