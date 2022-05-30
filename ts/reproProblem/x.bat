@echo on
set TT=C:\cprojects\github\khtan-private\LearningPlaywright\ts\reproProblem\pw4
docker run --volume %TT%:/tests -it --rm --ipc=host pw4

